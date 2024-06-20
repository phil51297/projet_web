import { Job } from 'bull';
import { ConversationService } from '../conversation/conversation.service';
import { Message } from './models/message.model';
export declare class MessageProcessor {
    private conversationService;
    constructor(conversationService: ConversationService);
    handleSendMessage(job: Job<Message>): Promise<Message>;
}
