export default class MirrorDataCommand {
  constructor(private readonly _id: string, private readonly _data: string) {}

  get data(): string {
    return this._data;
  }

  get id(): string {
    return this._id;
  }
}
