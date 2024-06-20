import { User } from './models/user.model';
export declare class UserService {
    private users;
    findAll(): User[];
    findOneById(id: string): User;
    create(username: string): User;
}
