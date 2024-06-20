import { Field, ObjectType } from '@nestjs/graphql';
import { Message } from 'src/message/models/message.model';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Conversation {
  constructor(user1: User, user2: User) {
    this.user1 = user1;
    this.user2 = user2;
  }

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  user1: User;

  @Field()
  user2: User;

  @Field(() => [Message])
  messages: Message[];
}
