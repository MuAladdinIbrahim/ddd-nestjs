import { Inject } from '@nestjs/common';
import ILocalStorage from '../../Domain/Abstracts/ILocalStorage';

export default class MirrorData {
  constructor(
    @Inject('LOCAL_STORAGE')
    private localStorage: ILocalStorage,
  ) {}

  mirror(data) {
    // listen to queue, and update local storage with incoming data
    // enqueue occurs for specific events like user-created, user-updated, user deleted
    // const data = dequeue()
    this.localStorage.persistInMemory({
      key: 'users',
      value: [
        { id: 1, name: 'Ahmed', email: '' },
        { id: 2, name: 'Muhammad', email: '' },
      ],
    });
  }
}
