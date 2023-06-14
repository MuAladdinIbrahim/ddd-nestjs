import { Injectable } from '@nestjs/common';
import { TaskModel } from 'src/contexts/Task/Infra/Persistence/task.model';
import { IDbClient } from './IDbClient';

type sequelizeModelType = typeof TaskModel;

@Injectable()
export default class SequelizeDbClient implements IDbClient {
  constructor(public model: sequelizeModelType) {
    this.model = model;
  }

  async find(query: any): Promise<any> {
    return await this.model.findAll(query);
  }

  async findOne(query: any): Promise<any> {
    return await this.model.findOne(query);
  }

  async update(query: any, updates): Promise<any> {
    return await this.model.update(updates, { where: query });
  }

  delete(query: any): Promise<any> {
    return Promise.resolve([]);
  }

  async insert(data: any): Promise<any> {
    await this.model.create(data);
  }
}
