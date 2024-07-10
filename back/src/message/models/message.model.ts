import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field()
  text: string;

  @Field()
  creationDate: Date;
}
