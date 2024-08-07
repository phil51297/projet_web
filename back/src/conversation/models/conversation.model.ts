import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Message } from '../../message/models/message.model';
import { User } from '../../user/models/user.model';

@ObjectType()
export class Conversation {
  constructor(user1: User, user2: User) {
    this.user1 = user1;
    this.user2 = user2;
  }

  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => User)
  user1: User;

  @Field(() => User)
  user2: User;

  @Field(() => [Message])
  messages: Message[];
}
