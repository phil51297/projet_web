import { MessageService } from './message.service';
import { Message } from './models/message.model';
import { UserService } from '../user/user.service';
export declare class MessageResolver {
    private messageService;
    private userService;
    constructor(messageService: MessageService, userService: UserService);
    messagesByConversation(conversationId: number): Message[];
    sendMessage(conversationId: number, userId: string, text: string): Promise<Message>;
}
