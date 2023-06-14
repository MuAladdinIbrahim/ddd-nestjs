import { Resolver, Query, Args } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { TaskModel } from '../../Infra/Persistence/task.model';
import Task from '../../Domain/Task';
import { GetTaskQuery } from '../../Application/Get/GetTaskQuery.query';
import FindTasksArgs from '../dtos/findTasksArgs.dto';

@Resolver((of) => TaskModel)
export class TaskResolver {
  constructor(private readonly queryBus: QueryBus) {}
  @Query((returns) => [TaskModel])
  async find(@Args('args') args: FindTasksArgs): Promise<Task[]> {
    const query = new GetTaskQuery(args.userId);
    //TODO replace Task[] with GetTaskResponse
    const tasks: Task[] = await this.queryBus.execute(query);
    return tasks;
  }
}
