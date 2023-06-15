import { IEvent } from '@nestjs/cqrs';
import Task from '../Task';
import { v4 as uuidv4 } from 'uuid';

export default class TaskUpdatedEvent implements IEvent {
  _id: string;
  constructor(private readonly _task: Task) {
    this._id = new uuidv4();
  }

  get id(): string {
    return this._id;
  }

  get task(): Task {
    return this._task;
  }
}
