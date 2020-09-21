import { Module } from '@nestjs/common';
import { ItemResolver } from './item.resolver';

@Module({
  providers: [ItemResolver]
})
export class ItemModule {}
