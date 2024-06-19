import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/models/user.model";

@ObjectType()
export class Message {

    @Field()
    id: number;

    @Field()
    user: User;

    @Field()
    text: string;

    @Field()
    creationDate: Date;
}