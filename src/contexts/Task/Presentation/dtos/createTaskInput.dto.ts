import { IsString, IsEnum } from 'class-validator';
import { ArgsType, InputType, Field } from '@nestjs/graphql';
import { statusValues } from '../../Domain/Abstracts/constants';

@ArgsType()
@InputType('CreateTaskInput')
export default class CreateTaskInput {
  @IsString()
  @Field(() => String)
  readonly userId: string;

  @IsString()
  @Field(() => String)
  readonly title: string;

  @IsString()
  @Field(() => String)
  readonly description: string;

  @IsString()
  @IsEnum(statusValues)
  @Field(() => String)
  readonly status: string;
}
