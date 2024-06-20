import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Message } from './models/message.model';
import { User } from '../user/models/user.model';
import { ConversationService } from '../conversation/conversation.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectQueue('messageQueue') private messageQueue: Queue,
    private conversationService: ConversationService,
  ) {}

  async sendMessage(conversationId: number, user: User, text: string): Promise<Message> {
    const message: Partial<Message> = {
      id: Date.now().toString(),
      user,
      text,
      creationDate: new Date(),
    };
    await this.messageQueue.add('sendMessage', { conversationId, message });
    return message as Message; 
  }

  findMessagesByConversation(conversationId: string): Message[] {
    const conversation = this.conversationService.findOneById(conversationId);
    return conversation.messages;
  }
}
