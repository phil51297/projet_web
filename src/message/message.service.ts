import { Injectable } from '@nestjs/common';
import { Message } from './models/message.model';
import { User } from '../user/models/user.model';
import { ConversationService } from '../conversation/conversation.service';

@Injectable()
export class MessageService {
  constructor(private conversationService: ConversationService) {}

  sendMessage(conversationId: string, user: User, text: string): Message {
    const conversation = this.conversationService.findOneById(conversationId);
    const newMessage: Message = {
      id: Date.now().toString(),
      user,
      text,
      creationDate: new Date(),
    };
    conversation.messages.push(newMessage);
    return newMessage;
  }

  findMessagesByConversation(conversationId: string): Message[] {
    const conversation = this.conversationService.findOneById(conversationId);
    return conversation.messages;
  }
}
