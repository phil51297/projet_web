import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from './models/message.model';
import { UserService } from '../user/user.service';
import { MessageQueueService } from './messageQueue/message-queue.service';

@Resolver((of) => Message)
export class MessageResolver {
  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private messageQueueService: MessageQueueService,
  ) {}

  @Query((returns) => [Message])
  messagesByConversation(@Args('conversationId') conversationId: string) {
    return this.messageService.findMessagesByConversation(conversationId);
  }

  @Mutation(returns => Message)
  async sendMessage(
    @Args('conversationId') conversationId: string,
    @Args('userId') userId: string,
    @Args('text') text: string,
  ) {
    const user = this.userService.findOneById(userId);
    await this.messageQueueService.addMessageToQueue(conversationId, user, text);
    return { id: Date.now(), user, text, creationDate: new Date() }; // Temporary return value
  }
}
