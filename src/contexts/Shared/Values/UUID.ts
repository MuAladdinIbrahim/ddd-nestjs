import { v4 as uuidv4, validate as validateUUID } from 'uuid';

export default class UUID {
  constructor(protected _value: string) {
    if (!validateUUID(this._value)) {
      throw new Error('Invalid UUID');
    }
  }
  get value(): string {
    return this._value;
  }

  static random(): UUID {
    return new UUID(uuidv4());
  }
}
