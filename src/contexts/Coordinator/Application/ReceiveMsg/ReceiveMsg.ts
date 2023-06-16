import { Inject, Logger } from '@nestjs/common';
import ICoordinator from '../../Domain/Abstracts/ICoordinator';

export default class ReceiveMsg {
  constructor(
    @Inject('COORDINATOR') private readonly coordinator: ICoordinator,
  ) {}

  receive(input: { data: any; id: any }) {
    Logger.log('Message Received');
    this.coordinator.redirect(input);
  }
}
