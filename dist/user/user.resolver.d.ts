import { UserService } from './user.service';
import { User } from './models/user.model';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): User[];
    createUser(username: string): User;
}
