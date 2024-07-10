import { Injectable } from '@nestjs/common';
import { Conversation } from './models/conversation.model';
import { User } from '../user/models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { Message } from 'src/message/models/message.model';

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

  findConversationByUsers(user1Id: string, user2Id: string): Conversation {
    return this.conversations.find(
      (conversation) =>
        (conversation.user1.id === user1Id && conversation.user2.id === user2Id) ||
        (conversation.user1.id === user2Id && conversation.user2.id === user1Id),
    );
  }

  findMessagesByUsers(user1Id: string, user2Id: string): Message[] {
    const conversation = this.findConversationByUsers(user1Id, user2Id);
    return conversation ? conversation.messages : [];
  }
}
