import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('username') username: string) {
    return this.userService.create(username);
  }
}
