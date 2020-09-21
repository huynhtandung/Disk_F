import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CatDto } from './cat.dto';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor (private readonly catService: CatService) {}
    @Post()
    async addCat(@Body() catDto: CatDto){
        return await this.catService.create(catDto);
    }

    @Get()
    async findAll(){
        console.log(process.env.SECRET);
        return await this.catService.findAll();
    }


    @Get(':id')
    async test(@Param('id') id){
        return await this.catService.findOne(id);
    }
}
