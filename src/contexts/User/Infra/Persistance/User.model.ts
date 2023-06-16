import {
  Table,
  Model,
  Column,
  DataType,
  Default,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('User')
@Table
export class UserModel extends Model {
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
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

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
