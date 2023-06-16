import { Inject } from '@nestjs/common';
import ICoordinator from '../../Domain/Abstracts/ICoordinator';

export default class Unubscribe {
  constructor(
    @Inject('COORDINATOR') private readonly coordinator: ICoordinator,
  ) {}

  unsubscribe(input: { data: any; id: any }) {
    // remove user id from datastore, unsubscribe from topic
  }
}
