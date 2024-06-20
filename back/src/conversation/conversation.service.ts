import { Injectable } from '@nestjs/common';
import { Conversation } from './models/conversation.model';
import { User } from '../user/models/user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ConversationService {
  private conversations: Conversation[] = [];

  findAll(): Conversation[] {
    return this.conversations;
  }

  findOneById(id: string): Conversation {
    return this.conversations.find((conversation) => conversation.id === id);
  }

  findByUser(userId: string): Conversation[] {
    return this.conversations.filter(
      (conversation) =>
        conversation.user1.id === userId || conversation.user2.id === userId,
    );
  }

  create(user1: User, user2: User): Conversation {
    const newConversation: Conversation = {
      id: uuidv4(),
      name: `${user1.username}-${user2.username}`,
      user1,
      user2,
      messages: [],
    };
    this.conversations.push(newConversation);
    return newConversation;
  }
}
