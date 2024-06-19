import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConversationService } from './conversation.service';
import { UserService } from '../user/user.service';
import { Conversation } from './models/conversation.model';

@Resolver(of => Conversation)
export class ConversationResolver {
  constructor(
    private conversationService: ConversationService,
    private userService: UserService,
  ) {}

  @Query(returns => [Conversation])
  conversations() {
    return this.conversationService.findAll();
  }

  @Query(returns => [Conversation])
  conversationsByUser(@Args('userId') userId: string) {
    return this.conversationService.findByUser(userId);
  }

  @Mutation(returns => Conversation)
  createConversation(@Args('user1Id') user1Id: string, @Args('user2Id') user2Id: string) {
    const user1 = this.userService.findOneById(user1Id);
    const user2 = this.userService.findOneById(user2Id);
    return this.conversationService.create(user1, user2);
  }
}
