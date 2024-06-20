import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  create(username: string): User {
    const newUser: User = { id: uuidv4(), username };
    this.users.push(newUser);
    return newUser;
  }
}
