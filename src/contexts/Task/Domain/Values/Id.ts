import UUID from 'src/contexts/Shared/Values/UUID';

export default class Id extends UUID {
  constructor(value?: string) {
    super(value || Id.random().value);
  }
}
