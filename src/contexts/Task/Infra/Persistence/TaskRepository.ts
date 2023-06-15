import { Inject, Injectable } from '@nestjs/common';
import { IDbClient } from 'src/contexts/Shared/Infra/Persistance/IDbClient';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import Task from '../../Domain/Task';
import TaskDbClient from './TaskDbClient';

@Injectable()
export default class TaskRepository implements ITaskRepository {
  constructor(@Inject(TaskDbClient) private dbClient: IDbClient) {}

  async find(query: any): Promise<any[]> {
    const tasks = await this.dbClient.find(query);
    return tasks;
  }

  async update(query, updates) {
    const task = await this.dbClient.update(query, updates);
    return task;
  }

  async save(task: Task): Promise<void> {
    await this.dbClient.insert({
      id: task.id.value,
      title: task.title.value,
      description: task.description.value,
      status: task.status.value,
      userId: task.userId.value,
    });
  }
}
