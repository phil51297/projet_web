import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { MessageService } from '../message.service';
import { User } from 'src/user/models/user.model';

@Processor('message-queue')
export class MessageQueueProcessor {
  constructor(private messageService: MessageService) {}

  @Process('sendMessage')
  async handleSendMessage(job: Job<{ conversationId: string; user: User; text: string }>) {
    const { conversationId, user, text } = job.data;
    this.messageService.sendMessage(conversationId, user, text);
  }
}
