import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from './models/message.model';
import { UserService } from '../user/user.service';

@Resolver()
export class MessageResolver {
  constructor(
    private messageService: MessageService,
    private userService: UserService,
  ) {}

  @Query(() => [Message]) // Remove the unused 'returns' parameter
  messagesByConversation(@Args('conversationId') conversationId: string) {
    return this.messageService.findMessagesByConversation(conversationId);
  }

  @Mutation(() => Message)
  async sendMessage(
    @Args('conversationId') conversationId: string,
    @Args('userId') userId: string,
    @Args('text') text: string,
  ) {
    const user = this.userService.findOneById(userId);
    return await this.messageService.sendMessage(conversationId, user, text);
  }
}
