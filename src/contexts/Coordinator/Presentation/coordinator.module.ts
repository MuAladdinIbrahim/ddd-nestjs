import { Module } from '@nestjs/common';
import ReceiveMsg from '../Application/ReceiveMsg/ReceiveMsg';
import ReceiveMsgCommandHandler from '../Application/ReceiveMsg/ReceiveMsgCommandHandler';
import { injections } from './Injections';
import { BullModule } from '@nestjs/bull';
import EventProcessor from '../Infra/EventProcessor';
import EventQueue from '../Infra/EventQueue';
import Coordinator from '../Domain/Coordinator';
import SubscribeCommandHandler from '../Application/Subscribe/SubscribeCommandHandler';
import UnsubscribeCommandHandler from '../Application/Unsubscribe/UnsubscribeCommandHandler';
import Subscribe from '../Application/Subscribe/Subscribe';
import Unubscribe from '../Application/Unsubscribe/Unsubscribe';
import NotifyCommandHandler from '../Application/NotifySubscriptor/NotifyCommandHandler';
import Notify from '../Application/NotifySubscriptor/Notify';

const commandHandlers = [
  ReceiveMsgCommandHandler,
  SubscribeCommandHandler,
  UnsubscribeCommandHandler,
  NotifyCommandHandler,
];
const actions = [ReceiveMsg, Subscribe, Unubscribe, Notify];
const consumers = [EventProcessor];
const producers = [EventQueue];

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'event',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  providers: [
    ...commandHandlers,
    ...injections,
    ...actions,
    ...consumers,
    ...producers,
    Coordinator,
  ],
})
export class CoordinatorModule {}
