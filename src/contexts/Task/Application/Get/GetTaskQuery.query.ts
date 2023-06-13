export class GetTaskQuery {
  constructor(private readonly _userId: string) {}
  get userId(): string {
    return this._userId;
  }
}
