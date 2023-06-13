import { Inject } from '@nestjs/common';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import Id from '../../Domain/Values/Id';
import Task from '../../Task';

export default class GetTask {
  // constructor(@Inject('TASK_REPOSITORY') private repository: ITaskRepository) {}
  async get(id: string): Promise<Task[]> {
    // return this.repository.find({ id });
    return [];
  }
}
