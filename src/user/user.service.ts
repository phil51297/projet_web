import { User, IUser } from "./models/user.model";

let users: IUser[] = [
  new User('Alice', 'alice@example.com'),
  new User('Bob', 'bob@example.com')
];

export class UserService {
  static getUserById(userId: string): IUser | undefined {
    return users.find(user => user.id === userId);
  }

  static getAllUsers(): IUser[] {
    return users;
  }
}
