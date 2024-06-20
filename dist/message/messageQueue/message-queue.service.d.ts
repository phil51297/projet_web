import { Queue } from 'bull';
import { User } from 'src/user/models/user.model';
export declare class MessageQueueService {
    private messageQueue;
    constructor(messageQueue: Queue);
    addMessageToQueue(conversationId: string, user: User, text: string): Promise<void>;
}
