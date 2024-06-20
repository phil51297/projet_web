import { Job } from 'bull';
import { MessageService } from '../message.service';
import { User } from 'src/user/models/user.model';
export declare class MessageQueueProcessor {
    private messageService;
    constructor(messageService: MessageService);
    handleSendMessage(job: Job<{
        conversationId: string;
        user: User;
        text: string;
    }>): Promise<void>;
}
