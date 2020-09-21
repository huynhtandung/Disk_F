import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('Message')
export class MessageResolver {
    messagesData = [
        { id: 0, description: 'The first message' },
        { id: 1, description: 'The second message' },
        { id: 2, description: 'The third message' }
    ]

    @Query('messages')
    getMessage(){
        return this.messagesData;
    }

    @Mutation()
    createMessage(@Args('description') description: string){
        const id = this.messagesData.length;
        const newMessage = {id, description};
        this.messagesData.push(newMessage);
        return newMessage;
    }
}
