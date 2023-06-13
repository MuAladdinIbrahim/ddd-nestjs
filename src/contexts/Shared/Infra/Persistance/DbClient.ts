import { Injectable } from '@nestjs/common';
import { IDbClient } from './IDbClient';

@Injectable()
export default class DbClient implements IDbClient {
  find(query: any): Promise<any> {
    return Promise.resolve([]);
  }
  findOne(query: any): Promise<any> {
    return Promise.resolve([]);
  }
  update(data: any): Promise<any> {
    return Promise.resolve([]);
  }

  delete(query: any): Promise<any> {
    return Promise.resolve([]);
  }
  insert(data: any): Promise<any> {
    return Promise.resolve([]);
  }
}
