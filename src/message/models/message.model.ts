import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/user/models/user.model';

export interface IMessage {
  id: string;
  content: string;
  timestamp: string;
  sender: User;
}

export class Message implements IMessage {
  id: string;
  content: string;
  timestamp: string;
  sender: User;

  constructor(content: string, sender: User) {
    this.id = uuidv4();
    this.content = content;
    this.timestamp = new Date().toISOString();
    this.sender = sender;
  }
}
