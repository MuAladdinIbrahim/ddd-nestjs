import { Injectable } from '@nestjs/common';
import SequelizeDbClient from 'src/contexts/Shared/Infra/Persistance/SequelizeDbClient';
import { InjectModel } from '@nestjs/sequelize';
import { TaskModel } from './task.model';

@Injectable()
export default class TaskDbClient extends SequelizeDbClient {
  constructor(@InjectModel(TaskModel) taskModel: typeof TaskModel) {
    super(taskModel);
  }
}
