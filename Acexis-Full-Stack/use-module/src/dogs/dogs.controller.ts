import { ForbiddenException } from './../forbidden.exception';
import { DogsService } from './dogs.service';
import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { Dogs } from './dogs.interface';
import { CatsService } from 'src/cats/cats.service';
import { Cats } from 'src/cats/cats.interface';
import { GlobalService } from 'src/global/global.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('dogs')
@UseFilters(new HttpExceptionFilter())
export class DogsController {
    constructor( 
        private readonly dogService: DogsService,
        private readonly catService: CatsService,
        private readonly globalService: GlobalService
    ){}

    @Get()
    async getAllDog(): Promise<Cats[]>{
        return this.catService.getAllCats();
    }

    @Post()
    addCat(@Body() dog: Dogs): string{
        this.dogService.addDog(dog);
        return 'Add dog success';
    }

    @Get('num')
    getData(): number[]{
        return this.globalService.getData();
    }

    @Get('admin')
    //@UseFilters(new HttpExceptionFilter())
    getAdmin(){
        return new ForbiddenException();
    }
}
