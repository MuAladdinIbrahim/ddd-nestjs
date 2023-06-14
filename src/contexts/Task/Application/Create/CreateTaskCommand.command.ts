export default class CreateTaskCommand {
  constructor(
    private readonly _id: string,
    private readonly _title: string,
    private readonly _description: string,
    private readonly _status: string,
    private readonly _userId: string,
  ) {}

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get status(): string {
    return this._status;
  }

  get userId(): string {
    return this._userId;
  }
}
