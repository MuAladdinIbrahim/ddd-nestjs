import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
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
    Logger.log(
      `${JSON.stringify(data)} is going to be added into queue: ${
        this.queue.name
      }`,
    );
    this.queue.add('event-added', data);
  }
}
