import { HttpService } from './http.service';
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    controllers: [CatsController],
    providers: [CatsService, HttpService],
    exports: [CatsService]
})
export class CatsModule {}
