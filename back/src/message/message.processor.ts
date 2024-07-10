import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Message } from './models/message.model';
import { ConversationService } from '../conversation/conversation.service';

@Processor('messageQueue')
export class MessageProcessor {
  constructor(private conversationService: ConversationService) {}

  @Process('sendMessage')
  async handleSendMessage(
    job: Job<{ conversationId: string; message: Partial<Message> }>,
  ) {
    const { conversationId, message } = job.data;
    const conversation = this.conversationService.findOneById(conversationId);

    if (conversation) {
      const newMessage: Message = {
        id: message.id!,
        user: message.user!,
        text: message.text!,
        creationDate: new Date(message.creationDate!),
      };
      conversation.messages.push(newMessage);
    }
  }
}
