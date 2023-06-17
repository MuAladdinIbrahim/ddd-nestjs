import { Description } from './Values/Description';
import Id from './Values/Id';
import Status from './Values/Status';
import { Title } from './Values/Title';
import UserId from './Values/UserId';
import { AggregateRoot } from '@nestjs/cqrs';
import TaskUpdatedEvent from './Events/TaskUpdated';

export default class Task extends AggregateRoot {
  constructor(
    private readonly _id: Id,
    private readonly _title: Title,
    private readonly _description: Description,
    private _status: Status,
    private readonly _userId: UserId,
  ) {
    super();
  }

  get id(): Id {
    return this._id;
  }

  get title(): Title {
    return this._title;
  }

  get description(): Description {
    return this._description;
  }

  get status(): Status {
    return this._status;
  }

  set status(status: Status) {
    this._status = status;
  }

  get userId(): UserId {
    return this._userId;
  }

  static create(
    id: Id,
    title: Title,
    description: Description,
    status: Status,
    userId: UserId,
  ): Task {
    return new Task(id, title, description, status, userId);
  }

  update(updates: { status: Status }) {
    const { status } = updates;
    this.status = status;
    this.apply(new TaskUpdatedEvent(this));
    return this;
  }
}
