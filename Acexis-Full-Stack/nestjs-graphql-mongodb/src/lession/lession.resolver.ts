import { Resolver, Query, Mutation, Args, Context, GraphQLExecutionContext } from '@nestjs/graphql';
import { LessionInput } from '../graphql';
import { LessionService } from './lession.service';
import { Lession } from './lession.entity';
import { UseGuards } from '@nestjs/common';

import { GetUser } from 'src/auth/get-user-decorator';
import { User } from 'src/auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
//import { AuthGuard } from 'src/auth.guard';


@Resolver('Lession')
export class LessionResolver {
    constructor(
        private lessionService: LessionService
    ){}

    @Mutation('createLession')
    @UseGuards(AuthGuard())
    async createLession(@Args('lession') lessionDto: LessionInput): Promise<Lession>{
        return this.lessionService.createLession(lessionDto);
    }

    @Query('getAllLession')
    //@UseGuards(AuthGuard) 
    async getAllLession(@Context() context: GraphQLExecutionContext): Promise<Lession[]>{
        
        const username = context['req'].username;
     console.log("UserID when create message: ", username);

        return this.lessionService.getAllLession();
    }
}
