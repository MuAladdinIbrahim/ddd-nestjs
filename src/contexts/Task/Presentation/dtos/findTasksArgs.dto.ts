import { IsString } from 'class-validator';
import { ArgsType, InputType, Field } from '@nestjs/graphql';

@ArgsType()
@InputType('FindTasksArgs')
export default class FindTasksArgs {
  @IsString()
  @Field(() => String)
  readonly userId: string;
}
