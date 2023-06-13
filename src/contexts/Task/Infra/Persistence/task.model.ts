import {
  Table,
  Model,
  Column,
  DataType,
  Default,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import {
  statusValuesEnum,
  statusValues,
} from '../../Domain/Abstracts/constants';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Task')
@Table
export class TaskModel extends Model {
  @Default(DataType.UUIDV4)
  @Field((type) => ID)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Field()
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Field({ nullable: true, defaultValue: '', description: 'Task description' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @Field({ defaultValue: statusValuesEnum.OPEN, description: 'Task status' })
  @Default(statusValuesEnum.OPEN)
  @Column({
    type: DataType.ENUM,
    allowNull: false,
    values: statusValues,
  })
  status: string;

  @Field()
  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Field()
  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updatedAt: Date;
}
