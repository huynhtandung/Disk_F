import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Get()
    getAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id){
        return this.userService.findOne(id);
    }
}
