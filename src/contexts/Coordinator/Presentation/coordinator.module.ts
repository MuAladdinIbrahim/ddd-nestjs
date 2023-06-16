import { Module } from '@nestjs/common';
import ReceiveMsg from '../Application/ReceiveMsg/ReceiveMsg';
import ReceiveMsgCommandHandler from '../Application/ReceiveMsg/ReceiveMsgCommandHandler';
import { injections } from './Injections';
import { BullModule } from '@nestjs/bull';
import { EventConsumer } from '../Infra/Consumer';
import EventQueue from '../Infra/Queue';
import Coordinator from '../Domain/Coordinator';

const commandHandlers = [ReceiveMsgCommandHandler];
const actions = [ReceiveMsg];
const consumers = [EventConsumer];
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
