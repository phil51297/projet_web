import { Message } from './models/message.model';
import { User } from '../user/models/user.model';
import { ConversationService } from '../conversation/conversation.service';
import { Queue } from 'bull';
export declare class MessageService {
    private conversationService;
    private messageQueue;
    constructor(conversationService: ConversationService, messageQueue: Queue);
    sendMessage(conversationId: number, user: User, text: string): Promise<Message>;
    findMessagesByConversation(conversationId: number): Message[];
}
