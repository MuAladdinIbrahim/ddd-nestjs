import { Inject, Injectable } from '@nestjs/common';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import Task from '../../Domain/Task';

@Injectable()
export default class GetTask {
  constructor(@Inject('TASK_REPOSITORY') private repository: ITaskRepository) {}
  async get(userId: string): Promise<Task[]> {
    //TODO use local storage to aggregate user into response if required
    return this.repository.find({ userId });
  }
}
