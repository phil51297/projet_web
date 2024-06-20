import { User } from 'src/user/models/user.model';
export declare class Message {
    id: string;
    user: User;
    text: string;
    creationDate: Date;
}
