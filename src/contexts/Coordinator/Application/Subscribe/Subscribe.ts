import { Inject, Injectable } from '@nestjs/common';
import ICoordinator from '../../Domain/Abstracts/ICoordinator';

@Injectable()
export default class Subscribe {
  constructor(
    @Inject('COORDINATOR') private readonly coordinator: ICoordinator,
  ) {}

  subscribe(input: { data: any; id: any }) {
    // keep user id to datastore, subscribe to topic
  }
}
