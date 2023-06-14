export default class UpdateTaskStatusCommand {
  constructor(private readonly _id: string, private readonly _status: string) {}

  get status(): string {
    return this._status;
  }

  get id(): string {
    return this._id;
  }
}
