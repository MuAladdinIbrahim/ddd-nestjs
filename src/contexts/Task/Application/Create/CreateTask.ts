import { Inject, Injectable, Logger } from '@nestjs/common';
import ILocalStorage from '../../Domain/Abstracts/ILocalStorage';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import Task from '../../Domain/Task';
import { Description } from '../../Domain/Values/Description';
import Id from '../../Domain/Values/Id';
import Status from '../../Domain/Values/Status';
import { Title } from '../../Domain/Values/Title';
import UserId from '../../Domain/Values/UserId';

@Injectable()
export default class CreateTask {
  logger: Logger = new Logger('[CreateTask] Action]');
  constructor(
    @Inject('TASK_REPOSITORY')
    private repository: ITaskRepository,
    @Inject('LOCAL_STORAGE')
    private localStorage: ILocalStorage,
  ) {}

  // get user data from in memory storage before creating a task.
  async create(
    id: Id,
    title: Title,
    descriptiion: Description,
    status: Status,
    userId: UserId,
  ): Promise<Task> {
    const user = this.localStorage.getRecordById('users', userId.value);
    if (!user) {
      this.logger.error(`user: ${userId.value} not found`);
      // throw new Error(`User not found`);
    }
    this.logger.debug(`user: ${user?.name} going to create a new task`);
    const task: Task = Task.create(id, title, descriptiion, status, userId);
    await this.repository.save(task);
    return task;
  }
}
