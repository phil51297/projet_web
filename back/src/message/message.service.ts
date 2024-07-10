import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Message } from './models/message.model';
import { User } from '../user/models/user.model';
import { ConversationService } from '../conversation/conversation.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessageService {
  constructor(
    @InjectQueue('messageQueue') private messageQueue: Queue,
    private conversationService: ConversationService,
  ) {}

  async sendMessage(
    conversationId: string,
    user: User,
    text: string,
  ): Promise<Message> {
    const message: Message = {
      id: uuidv4(),
      user,
      text,
      creationDate: new Date(),
    };
    await this.messageQueue.add('sendMessage', { conversationId, message });
    return message;
  }

  findMessagesByConversation(conversationId: string): Message[] {
    const conversation = this.conversationService.findOneById(conversationId);
    return conversation.messages;
  }
}
