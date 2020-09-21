import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0-qami4.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}), 
    CatModule,
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
