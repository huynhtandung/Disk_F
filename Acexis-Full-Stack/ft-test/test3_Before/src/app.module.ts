import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { join } from 'path'
import { GraphQLModule } from '@nestjs/graphql'
import { CatModule } from './cat/cat.module';
import jwt = require('jsonwebtoken');
const { withFilter } = require('apollo-server');
import { PubSub } from 'graphql-subscriptions';


const pubsub = new PubSub();

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      context: ({ req, res }) => ({ req, res }),
      installSubscriptionHandlers: true,
      subscriptions: {
        onConnect: (connectionParams) => {
          const token = connectionParams["authorization"] || null;
          if(!token){
            return false;
          }else{
            try{
              const user = jwt.verify(token, process.env.SECRET)
              const userID = user.userID;
              const privileges = user.privileges;
            }catch(err){
              console.log('Invalid token');
              return false;
            }
          }
        }
      },
      resolvers : {
        Subscription : {
          catCreated : {
            subscribe: withFilter(
              () => pubsub.asyncIterator('catCreated'),
              (payload, variables) => {    
                //kiem tra quyen
                console.log('v');
                return true;
              },
            ),
          }
        }
      }
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule { }
