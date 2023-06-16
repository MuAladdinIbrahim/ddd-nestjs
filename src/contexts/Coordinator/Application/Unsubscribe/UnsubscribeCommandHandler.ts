import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Unsubscribe from './Unsubscribe';
import UnsubscribeCommand from './UnsubscribeCommand';

@CommandHandler(UnsubscribeCommand)
export default class UnsubscribeCommandHandler
  implements ICommandHandler<UnsubscribeCommand>
{
  constructor(
    @Inject('UNSUBSCRIBE') private readonly unsubscribe: Unsubscribe,
  ) {}

  async execute(command: UnsubscribeCommand): Promise<void> {
    this.unsubscribe.unsubscribe(command);
  }
}
