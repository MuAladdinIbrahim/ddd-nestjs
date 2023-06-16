import { Inject } from '@nestjs/common';
import ICoordinator from './Abstracts/ICoordinator';
import IQueue from './Abstracts/IQueue';
import { Logger } from '@nestjs/common';

export default class Coordinator implements ICoordinator {
  constructor(@Inject('EVENT_QUEUE') private readonly _queue: IQueue) {}

  redirect(msg: any) {
    Logger.log('Redirecting message to queue');
    this._queue.add(msg);
  }

  notify(input: any) {
    Logger.log('Notifying message to subscriptors');
  }
}
