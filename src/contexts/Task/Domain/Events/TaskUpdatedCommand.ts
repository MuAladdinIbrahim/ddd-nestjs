import { ICommand } from '@nestjs/cqrs';

export default class TaskUpdatedCommand implements ICommand {
  constructor(private readonly _task: any) {}
  get task(): string {
    return this._task;
  }
}
