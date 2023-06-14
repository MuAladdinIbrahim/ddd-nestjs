import { Inject, Injectable } from '@nestjs/common';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import Task from '../../Domain/Task';
import { Description } from '../../Domain/Values/Description';
import Id from '../../Domain/Values/Id';
import Status from '../../Domain/Values/Status';
import { Title } from '../../Domain/Values/Title';
import UserId from '../../Domain/Values/UserId';
import TaskRepository from '../../Infra/Persistence/TaskRepository';

@Injectable()
export default class CreateTask {
  constructor(@Inject(TaskRepository) private repository: ITaskRepository) {}

  async create(
    id: Id,
    title: Title,
    descriptiion: Description,
    status: Status,
    userId: UserId,
  ) {
    const task: Task = Task.create(id, title, descriptiion, status, userId);
    await this.repository.save(task);
  }
}
