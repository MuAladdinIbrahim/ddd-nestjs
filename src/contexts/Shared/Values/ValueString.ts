export default class StringValue {
  constructor(protected _value: string) {
    this.validate(this._value);
  }

  get value(): string {
    return this._value;
  }

  validate(value: string): void {
    if (typeof value !== 'string') {
      throw new Error('Invalid value');
    }
  }
}
