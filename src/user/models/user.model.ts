import { v4 as uuidv4 } from 'uuid';
import { Conversation } from 'src/conversation/models/conversation.model';

export interface IUser {
  id: string;
  name: string;
  email: string;
  conversations: Conversation[];
}

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  conversations: Conversation[] = [];

  constructor(name: string, email: string) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
  }
}
