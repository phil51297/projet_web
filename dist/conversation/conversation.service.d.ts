import { Conversation } from './models/conversation.model';
import { User } from '../user/models/user.model';
export declare class ConversationService {
    private conversations;
    findAll(): Conversation[];
    findOneById(id: string): Conversation;
    findByUser(userId: string): Conversation[];
    create(user1: User, user2: User): Conversation;
}
