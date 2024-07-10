import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: string): User {
    return this.users.find(user => user.id === id);
  }

  async create(username: string, password: string): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser: User = {
      id: Date.now().toString(),
      username,
      password: hashedPassword,
    };
    this.users.push(newUser);
    return newUser;
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = this.users.find(user => user.username === username);
    if (!user) {
      return false;
    }
    return await bcrypt.compare(password, user.password);
  }
}
