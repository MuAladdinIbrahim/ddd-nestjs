import { Inject, Injectable } from '@nestjs/common';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import TaskRepository from '../../Infra/Persistence/TaskRepository';
import Task from '../../Domain/Task';

@Injectable()
export default class GetTask {
  constructor(@Inject(TaskRepository) private repository: ITaskRepository) {}
  async get(id: string): Promise<Task[]> {
    return this.repository.find({ id });
  }
}
