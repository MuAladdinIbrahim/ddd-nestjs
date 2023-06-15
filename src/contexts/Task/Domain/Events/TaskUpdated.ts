import { IEvent } from '@nestjs/cqrs';
import Task from '../Task';

export default class TaskUpdatedEvent implements IEvent {
  constructor(private readonly _task: Task) {}

  get task(): Task {
    return this._task;
  }
}
