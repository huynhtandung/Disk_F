import { GlobalService } from './../global/global.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cats } from './cats.interface';

@Controller('cats')
export class CatsController {
    constructor( 
        private readonly catService: CatsService,
        private readonly globalService: GlobalService
    ){}

    @Get()
    async getAlllCat(): Promise<Cats[]>{
        return this.catService.getAllCats();
    }

    @Post()
    addCat(@Body() cat: Cats): string{
        this.catService.addCat(cat);
        this.globalService.setData();
        return 'Add cat success' + cat.name;
    }
}
