import StringValue from './ValueString';

export default class EnumValue extends StringValue {
  constructor(protected _value: string, protected _enumValues: string[]) {
    super(_value);
    this.validate(this._value);
  }

  get enumValues(): string[] {
    return this._enumValues;
  }

  validate(value: string): void {
    const isValueExist = this._enumValues.includes(value);
    if (!isValueExist) throw new Error(`Value ${value} not exist in enum`);
  }
}
