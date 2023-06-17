import { Logger } from '@nestjs/common';
import ILocalStorage from '../../Domain/Abstracts/ILocalStorage';

export default class LocalStorage implements ILocalStorage {
  // TODO use redis instead of in memory
  inMemoryStorage: { [key: string]: Map<string, any> } = {
    users: new Map(),
  };
  persistInMemory(data: { key: string; value: any[] }): void {
    // for now using this map
    const memory = this.inMemoryStorage[data.key];
    if (!memory) {
      this.inMemoryStorage[data.key] = new Map();
    }
    data.value.forEach((value) => {
      memory.set(value.id, value);
    });
  }

  removeFromMemory(data: { key: string; value: any[] }): void {
    const memory = this.inMemoryStorage[data.key];
    data.value.forEach((value) => {
      memory.delete(value.id);
    });
  }

  getRecordById(dbkey: string, id: string): any {
    const memory = this.inMemoryStorage[dbkey];
    const record = memory.get(id);
    if (!record) {
      Logger.log(`[LocalStorage] Record with id ${id} not found in memory`);
    }
    return record;
  }
}
