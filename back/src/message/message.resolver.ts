import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from './models/message.model';
import { UserService } from '../user/user.service';

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private messageService: MessageService,
    private userService: UserService,
  ) {}

  @Query(() => [Message])
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
    if (!user) {
      throw new Error('User not found');
    }
    return await this.messageService.sendMessage(conversationId, user, text);
  }
}
