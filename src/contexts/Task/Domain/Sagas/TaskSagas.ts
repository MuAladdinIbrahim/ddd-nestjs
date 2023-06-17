import { Injectable } from '@nestjs/common';
import { Saga, ICommand, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import ReceiveMsgCommand from 'src/contexts/Coordinator/Application/ReceiveMsg/ReceiveMsgCommand';
import TaskUpdatedEvent from '../Events/TaskUpdated';

@Injectable()
export default class TaskSagas {
  @Saga()
  taskUpdated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TaskUpdatedEvent),
      map((event) => {
        return new ReceiveMsgCommand(event.id, event.task);
      }),
    );
  };
}
