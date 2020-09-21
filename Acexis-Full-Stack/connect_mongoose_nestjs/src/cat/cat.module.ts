import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cat.schema';

@Module({
  imports : [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatService],
  controllers: [CatController]
})
export class CatModule {}
