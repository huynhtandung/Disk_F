import { Controller, Get, Post, Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from 'src/cats/cats.dto';

@Controller('async')
export class AsyncController {
   /*@Get()
    async getAsync(): Promise<any[]>{
        return [];
    }*/

    @Get()
    findAll(): Observable<any[]> {
        return of([]);
    }

    
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat ' + createCatDto.name;
    }

}