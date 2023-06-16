import { Inject, Logger } from '@nestjs/common';
import ICoordinator from '../../Domain/Abstracts/ICoordinator';

export default class Notify {
  constructor(
    @Inject('COORDINATOR') private readonly coordinator: ICoordinator,
  ) {}

  send(input: { data: any; id: any }) {
    Logger.log('Message Send');
    this.coordinator.notify(input);
  }
}
