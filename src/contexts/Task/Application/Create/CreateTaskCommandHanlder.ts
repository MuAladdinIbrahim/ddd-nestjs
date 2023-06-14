import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Description } from '../../Domain/Values/Description';
import Id from '../../Domain/Values/Id';
import Status from '../../Domain/Values/Status';
import { Title } from '../../Domain/Values/Title';
import UserId from '../../Domain/Values/UserId';
import CreateTask from './CreateTask';
import CreateTaskCommand from './CreateTaskCommand.command';

@CommandHandler(CreateTaskCommand)
export default class CreateTaskHandler
  implements ICommandHandler<CreateTaskCommand>
{
  constructor(@Inject(CreateTask) private readonly createTask: CreateTask) {}

  async execute(command: CreateTaskCommand): Promise<void> {
    return this.createTask.create(
      new Id(command.id),
      new Title(command.title),
      new Description(command.description),
      new Status(command.status),
      new UserId(command.userId),
    );
  }
}
