import { Message } from 'src/message/models/message.model';
import { User } from 'src/user/models/user.model';
export declare class Conversation {
    constructor(user1: User, user2: User);
    id: string;
    name: string;
    user1: User;
    user2: User;
    messages: Message[];
}
