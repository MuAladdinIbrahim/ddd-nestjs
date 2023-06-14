import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Id from '../../Domain/Values/Id';
import Status from '../../Domain/Values/Status';
import UpdateTaskStatus from './UpdateTaskStatus';
import UpdateTaskStatusCommand from './UpdateTaskStatusCommand.command';

@CommandHandler(UpdateTaskStatusCommand)
export default class UpdateTaskStatusHandler
  implements ICommandHandler<UpdateTaskStatusCommand>
{
  constructor(
    @Inject(UpdateTaskStatus)
    private readonly updateTaskStatus: UpdateTaskStatus,
  ) {}

  async execute(command: UpdateTaskStatusCommand): Promise<void> {
    return this.updateTaskStatus.update(
      new Id(command.id),
      new Status(command.status),
    );
  }
}
