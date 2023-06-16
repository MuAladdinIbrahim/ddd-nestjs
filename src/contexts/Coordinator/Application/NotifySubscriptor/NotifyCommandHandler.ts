import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Notify from './Notify';
import NotifyCommand from './NotifyCommand';

@CommandHandler(NotifyCommand)
export default class NotifyCommandHandler
  implements ICommandHandler<NotifyCommand>
{
  constructor(@Inject('NOTIFY') private readonly notify: Notify) {}

  async execute(command: NotifyCommand): Promise<void> {
    this.notify.send(command);
  }
}
