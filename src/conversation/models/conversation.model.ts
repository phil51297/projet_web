import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Message } from 'src/message/models/message.model';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Conversation {

    constructor(user1: User, user2: User) {
        this.user1 = user1;
        this.user2 = user2;
    }

    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field(type => User)
    user1: User;

    @Field(type => User)
    user2: User;

    @Field(type => [Message])
    messages: Message[];
}
