import { Injectable } from '@nestjs/common';
import { Saga, ICommand, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import TaskUpdatedEvent from '../Events/TaskUpdated';
import TaskUpdatedCommand from '../Events/TaskUpdatedCommand';

@Injectable()
export default class TaskSagas {
  @Saga()
  taskUpdated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TaskUpdatedEvent),
      map((event) => {
        return new TaskUpdatedCommand(event.task);
      }),
    );
  };
}
