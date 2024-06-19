import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    id: string

    @Field()
    username: string
}