import { IsString, IsEnum } from 'class-validator';
import { ArgsType, InputType, Field } from '@nestjs/graphql';
import { statusValues } from '../../Domain/Abstracts/constants';

@ArgsType()
@InputType('UpdateTaskStatusInput')
export default class UpdateTaskStatusInput {
  @IsString()
  @Field(() => String)
  readonly id: string;

  @IsString()
  @IsEnum(statusValues)
  @Field(() => String)
  readonly status: string;
}
