import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/user/models/user.model';
import { Message } from 'src/message/models/message.model';

export interface IConversation {
  id: string;
  participants: User[];
  messages: Message[];
}

export class Conversation implements IConversation {
  id: string;
  participants: User[];
  messages: Message[] = [];

  constructor(participants: User[]) {
    this.id = uuidv4();
    this.participants = participants;
  }
}
