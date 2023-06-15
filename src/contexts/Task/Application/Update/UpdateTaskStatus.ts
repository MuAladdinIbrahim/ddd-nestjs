import { Inject, Injectable } from '@nestjs/common';
import ITaskRepository from '../../Domain/Abstracts/ITaskRepository';
import TaskRepository from '../../Infra/Persistence/TaskRepository';
import Id from '../../Domain/Values/Id';
import Status from '../../Domain/Values/Status';
import Task from '../../Domain/Task';
import { Title } from '../../Domain/Values/Title';
import { Description } from '../../Domain/Values/Description';
import UserId from '../../Domain/Values/UserId';

@Injectable()
export default class UpdateTaskStatus {
  constructor(@Inject(TaskRepository) private repository: ITaskRepository) {}
  async update(id: Id, status: Status): Promise<any> {
    const result = await this.repository.find({ id: id.value });
    const taskRecord: any = result[0];

    if (!taskRecord) throw new Error(`Task with id: ${id.value} not found`);
    const task: Task = new Task(
      new Id(taskRecord.id),
      new Title(taskRecord.title),
      new Description(taskRecord.description),
      new Status(taskRecord.status),
      new UserId(taskRecord.userId),
    );

    const updatedTask = task.update({ status });
    await this.repository.update({ id: id.value }, { status: status.value });
    return updatedTask;
  }
}
