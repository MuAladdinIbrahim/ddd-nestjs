import EnumValue from 'src/contexts/Shared/Values/EnumValue';

const statusValues: string[] = ['open', 'done', 'in_progress', 'cancelled'];

export default class Status extends EnumValue {
  constructor(protected _value: string) {
    super(_value, statusValues);
  }
}
