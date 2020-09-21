import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { HttpService } from './http.service';
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
    /*@Get()
    @HttpCode(205)
    @Header('Cache-Control', 'none')
    findAll(@Req() _request: Request): String{
        return 'Cats';
    }

    @Get('ab*d')
    @Redirect('https://nestjs.com', 301)
    find(@Req() _request: Request): String{
        return 'Get cats flex param';
    }

    //query
    @Get('version')
    version(@Query('v') version): String{
        return version;
    }

    @Post()
    createOne(): String{
        return 'Add cat'
    }

    //param
    @Get(':id')
    getParam(@Param('id') id): String{
        return `This is a cat of id ${id}`
    }*/
    constructor( 
        private readonly catsServices: CatsService,
        private readonly httpService: HttpService<string>
    ){}

    @Post()
    async addCat(@Body() catDto: CreateCatDto): Promise<string>{
        this.catsServices.create(catDto);
        return 'Add success';
    }

    @Get()
    async getCat(): Promise<CreateCatDto[]>{
        return this.catsServices.findAll();
    }

    @Get('http/:ip')
    async getHttpClient(@Param('ip') ip): Promise<string>{
        return this.httpService.getHttpClient(ip);
    }

}
