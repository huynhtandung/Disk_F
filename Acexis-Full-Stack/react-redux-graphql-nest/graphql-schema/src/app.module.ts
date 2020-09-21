import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { MessageModule } from './message/message.module';
import { join } from 'path';
import { ItemModule } from './item/item.module';
import { TextingModule } from './texting/texting.module';
import { ReModule } from './re/re.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      installSubscriptionHandlers: true,
    }),
    MessageModule,
    ItemModule,
    TextingModule,
    ReModule,
  ],
})
export class AppModule {}
