import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import { TextingService } from './texting.service';
import { InputTexting, Texting } from '../graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Texting')
export class TextingResolver {
  constructor(private textingService: TextingService) {}
  @Query('texting')
  async getMessage() {
    console.log('GET');
    await this.sleep(2000);
    return this.textingService.getTexting();
  }

  @Mutation('createTexting')
  async createTexting(@Args('inputTexting') inputTexting: InputTexting) {
    console.log('POST');
    await this.sleep(2000);
    pubSub.publish(String(inputTexting.roomID), { textCreated: inputTexting });
    return this.textingService.createTexting(inputTexting);
  }

  @Subscription('textCreated')
  textCreated(@Args('roomID') roomID: string) {
    console.log('Register to room ' + roomID);
    return pubSub.asyncIterator(roomID);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
