import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('test')
export class TestController {
    @Get()
    @UseGuards(AuthGuard())
    test(){
        return 'Test'
    }
}
