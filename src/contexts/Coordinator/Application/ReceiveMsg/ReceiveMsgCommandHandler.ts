import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import ReceiveMsg from './ReceiveMsg';
import ReceiveMsgCommand from './ReceiveMsgCommand';

@CommandHandler(ReceiveMsgCommand)
export default class ReceiveMsgCommandHandler
  implements ICommandHandler<ReceiveMsgCommand>
{
  constructor(
    @Inject('RECEIEVE_MSG') private readonly receieveMsg: ReceiveMsg,
  ) {}

  async execute(command: ReceiveMsgCommand): Promise<void> {
    this.receieveMsg.receive(command);
  }
}
