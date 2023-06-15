import { Module } from '@nestjs/common';
import ReceiveMsg from '../Application/ReceiveMsg/ReceiveMsg';
import ReceiveMsgCommandHandler from '../Application/ReceiveMsg/ReceiveMsgCommandHandler';
import { injections } from './Injections';

const commandHandlers = [ReceiveMsgCommandHandler];
const Actions = [ReceiveMsg];

@Module({
  imports: [],
  providers: [...commandHandlers, ...injections, ...Actions],
})
export class CoordinatorModule {}
