import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import TaskUpdatedEvent from './TaskUpdated';
import { Logger } from '@nestjs/common';

@EventsHandler(TaskUpdatedEvent)
export default class TaskUpdatedEventHandler
  implements IEventHandler<TaskUpdatedEvent>
{
  handle(event: TaskUpdatedEvent) {
    Logger.log({ task: event.task });
    return event;
  }
}
