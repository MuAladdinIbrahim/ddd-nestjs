import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import IQueue from '../Domain/Abstracts/IQueue';

@Injectable()
export default class EventQueue implements IQueue {
  private _name = 'event';
  constructor(@InjectQueue('event') private readonly queue: Queue) {}

  get name(): string {
    return this._name;
  }

  add(data: any) {
    this.queue.add(data);
  }
}
