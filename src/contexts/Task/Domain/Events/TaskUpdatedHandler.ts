import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import TaskUpdatedCommand from './TaskUpdatedCommand';

@CommandHandler(TaskUpdatedCommand)
export default class TaskUpdatedEventHandler
  implements ICommandHandler<TaskUpdatedCommand>
{
  async execute(command: TaskUpdatedCommand): Promise<any> {
    console.log({ task: command.task });
    return Promise.resolve();
  }
}
