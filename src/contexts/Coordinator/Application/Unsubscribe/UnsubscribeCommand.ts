import { ICommand } from '@nestjs/cqrs';

export default class UnsubscribeCommand implements ICommand {
  constructor(private readonly _id: string, private readonly _data: any) {}

  get data(): any {
    return this._data;
  }

  get id(): string {
    return this._id;
  }
}
