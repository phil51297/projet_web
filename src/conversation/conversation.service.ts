import { Injectable } from '@nestjs/common';
import { Conversation } from './models/conversation.model';
import { User } from '../user/models/user.model';

@Injectable()
export class ConversationService {
  private conversations: Conversation[] = [];

  findAll(): Conversation[] {
    return this.conversations;
  }

  findOneById(id: number): Conversation {
    return this.conversations.find(conversation => conversation.id === id);
  }

  findByUser(userId: string): Conversation[] {
    return this.conversations.filter(conversation => 
      conversation.user1.id === userId || conversation.user2.id === userId
    );
  }

  create(user1: User, user2: User): Conversation {
    const newConversation: Conversation = {
      id: Date.now(),
      name: `${user1.username}-${user2.username}`,
      user1,
      user2,
      messages: []
    };
    this.conversations.push(newConversation);
    return newConversation;
  }
}
