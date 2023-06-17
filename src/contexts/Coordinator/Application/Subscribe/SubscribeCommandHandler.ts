import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import SubscribeCommand from './SubscribeCommand';
import Subscribe from './Subscribe';

@CommandHandler(SubscribeCommand)
export default class SubscribeCommandHandler
  implements ICommandHandler<SubscribeCommand>
{
  constructor(@Inject('SUBSCRIBE') private readonly subscribe: Subscribe) {}

  async execute(command: SubscribeCommand): Promise<void> {
    this.subscribe.subscribe(command);
  }
}
