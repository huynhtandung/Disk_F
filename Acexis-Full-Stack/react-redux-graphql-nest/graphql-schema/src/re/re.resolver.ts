import { Resolver, Mutation, Args, Subscription, Query } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Re')
export class ReResolver {
  @Mutation('createdRe')
  createdRe(@Args('nameList') nameList: String) {
    console.log(nameList);
    pubSub.publish('register', { reCreated: nameList });
    return nameList;
  }

  @Subscription('reCreated')
  reCreated() {
    return pubSub.asyncIterator('register');
  }
}
