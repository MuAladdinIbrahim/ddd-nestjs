import UUID from 'src/contexts/Shared/Values/UUID';

export default class UserId extends UUID {
  constructor(value?: string) {
    super(value || UserId.random().value);
  }
}
