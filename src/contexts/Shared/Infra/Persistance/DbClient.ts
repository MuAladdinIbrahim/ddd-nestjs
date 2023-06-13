import { Injectable } from '@nestjs/common';
import { IDbClient } from './IDbClient';

@Injectable()
export default class DbClient implements IDbClient {
  constructor(public model: any) {
    this.model = model;
  }

  async find(query: any): Promise<any> {
    return await this.model.findAll(query);
  }

  async findOne(query: any): Promise<any> {
    return await this.model.findOne(query);
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
