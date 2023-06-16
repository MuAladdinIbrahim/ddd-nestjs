import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import SubscribeCommand from './ReceiveMsgCommand';
import Subscribe from './Subscribe';

@CommandHandler(SubscribeCommand)
export default class ReceiveMsgCommandHandler
  implements ICommandHandler<SubscribeCommand>
{
  constructor(@Inject('RECEIEVE_MSG') private readonly subscribe: Subscribe) {}

  async execute(command: SubscribeCommand): Promise<void> {
    this.subscribe.subscribe(command);
  }
}
