import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription, Context, GraphQLExecutionContext } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Cat } from '../graphql';
import { CatsService } from './cat.service';
import { CreateCatDto } from './dto/create-cat-dto';
const { withFilter } = require('apollo-server');

const pubSub = new PubSub();

@Resolver('Cat')
export class CatsResolvers {
  constructor(private readonly catsService: CatsService) {}

  @Query()
  async getCats() {
    return this.catsService.findAll();
  }

  @Query('cat')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Cat> {
    return this.catsService.findOneById(id);
  }

  @Mutation('createCat')
  async create(@Args('createCatInput') args: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catsService.create(args);
    pubSub.publish('catCreated', { catCreated: createdCat });
    return createdCat;
  }

  @Subscription('catCreated')
  catCreated() {
    return withFilter(
      () => pubSub.asyncIterator('catCreated'),
      (payload, variables) => {    
        //kiem tra quyen
        console.log('v');
        return true;
      },
    ),
  }
}