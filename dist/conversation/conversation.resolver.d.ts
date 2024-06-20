import { ConversationService } from './conversation.service';
import { UserService } from '../user/user.service';
import { Conversation } from './models/conversation.model';
export declare class ConversationResolver {
    private conversationService;
    private userService;
    constructor(conversationService: ConversationService, userService: UserService);
    conversations(): Conversation[];
    conversationsByUser(userId: string): Conversation[];
    createConversation(user1Id: string, user2Id: string): Conversation;
}
