import { Inject, Injectable } from '@nestjs/common';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import TaskRepository from '../../Infra/Persistence/TaskRepository';
import Id from '../../Domain/Values/Id';
import Status from '../../Domain/Values/Status';

@Injectable()
export default class UpdateTaskStatus {
  constructor(@Inject(TaskRepository) private repository: ITaskRepository) {}
  async update(id: Id, status: Status): Promise<any> {
    return this.repository.update({ id: id.value }, { status: status.value });
  }
}
