import { Inject, Injectable } from '@nestjs/common';
import DbClient from 'src/contexts/Shared/Infra/Persistance/DbClient';
import { IDbClient } from 'src/contexts/Shared/Infra/Persistance/IDbClient';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import { TaskModel } from './task.model';

@Injectable()
export default class TaskRepository implements ITaskRepository {
  constructor(@Inject(DbClient) private dbClient: IDbClient) {}

  async find(id: any): Promise<TaskModel | any> {
    const task = await this.dbClient.find({ id });
    // serialize task table to Task
    return task;
  }
}
