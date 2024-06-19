import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType()
class Status {
  @Field()
  result: string;
}

@Resolver()
export class HealthResolver {
  @Query(() => Status)
  async getStatus() {
    return { result: 'ok' };
  }
}
