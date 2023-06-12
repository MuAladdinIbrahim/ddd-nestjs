import { Description } from './Domain/Values/Description';
import Id from './Domain/Values/Id';
import Status from './Domain/Values/Status';
import { Title } from './Domain/Values/Title';
import UserId from './Domain/Values/UserId';

export default class Task {
  constructor(
    private readonly _id: Id,
    private readonly _title: Title,
    private readonly _description: Description,
    private readonly _status: Status,
    private readonly _userId: UserId,
  ) {}

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
}
