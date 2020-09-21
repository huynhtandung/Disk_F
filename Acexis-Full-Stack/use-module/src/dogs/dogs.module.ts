import { CatsModule } from './../cats/cats.module';
import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Module({
  imports: [CatsModule],
  controllers: [DogsController],
  providers: [DogsService, { //use filter exception for specific module
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },]
})
export class DogsModule {}
