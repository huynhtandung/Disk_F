import { Module } from '@nestjs/common';
import { CatsService } from './cat.service';
import { CatsResolvers } from './cat.resolver';

@Module({
  providers: [CatsService, CatsResolvers]
})
export class CatModule {}
