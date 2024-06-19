import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from './models/message.model';
import { UserService } from '../user/user.service';

@Resolver(of => Message)
export class MessageResolver {
  constructor(
    private messageService: MessageService,
    private userService: UserService,
  ) {}

  @Query(returns => [Message])
  messagesByConversation(@Args('conversationId') conversationId: number) {
    return this.messageService.findMessagesByConversation(conversationId);
  }

  @Mutation(returns => Message)
  sendMessage(
    @Args('conversationId') conversationId: number,
    @Args('userId') userId: string,
    @Args('text') text: string,
  ) {
    const user = this.userService.findOneById(userId);
    return this.messageService.sendMessage(conversationId, user, text);
  }
}
