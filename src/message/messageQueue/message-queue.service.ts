import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Message } from '../models/message.model';
import { User } from 'src/user/models/user.model';

@Injectable()
export class MessageQueueService {
  constructor(@InjectQueue('message-queue') private messageQueue: Queue) {}

  async addMessageToQueue(conversationId: string, user: User, text: string) {
    const message = { conversationId, user, text, creationDate: new Date() };
    await this.messageQueue.add('sendMessage', message);
  }
}
