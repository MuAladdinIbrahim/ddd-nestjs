import EnumValue from 'src/contexts/Shared/Values/EnumValue';
import { statusValues } from '../Abstracts/constants';

export default class Status extends EnumValue {
  constructor(protected _value: string) {
    super(_value, statusValues);
  }
}
