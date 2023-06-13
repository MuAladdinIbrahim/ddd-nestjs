import { Injectable } from '@nestjs/common';
import DbClient from 'src/contexts/Shared/Infra/Persistance/DbClient';
import { InjectModel } from '@nestjs/sequelize';
import { TaskModel } from './task.model';

@Injectable()
export default class TaskDbClient extends DbClient {
  constructor(@InjectModel(TaskModel) taskModel: typeof TaskModel) {
    super(taskModel);
  }
}
