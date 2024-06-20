import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';

@ObjectType()
export class Message {

    @Field(type => ID)
    id: string;

    @Field(type => User)
    user: User;

    @Field()
    text: string;

    @Field()
    creationDate: Date;
}
