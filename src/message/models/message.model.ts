import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Message {

    @Field(type => Int)
    id: number;

    @Field(type => User)
    user: User;

    @Field()
    text: string;

    @Field()
    creationDate: Date;
}
