import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: string): User {
    return this.users.find(user => user.id === id);
  }

  create(username: string): User {
    const newUser: User = { id: Date.now().toString(), username };
    this.users.push(newUser);
    return newUser;
  }
}
