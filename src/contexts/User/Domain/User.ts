import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _email: string,
  ) {
    super();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  static create(id: string, name: string, email: string) {
    // fire event user-created to update task's contect local storage
    return new User(id, name, email);
  }
}
