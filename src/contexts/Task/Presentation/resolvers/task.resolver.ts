import { Resolver, Query, Args } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { TaskModel } from '../../Infra/Persistence/task.model';
import Task from '../../Task';
import { GetTaskQuery } from '../../Application/Get/GetTaskQuery.query';

@Resolver((of) => TaskModel)
export class TaskResolver {
  constructor(private readonly queryBus: QueryBus) {}
  @Query((returns) => [TaskModel])
  async find(@Args('userId') userId: string): Promise<Task[]> {
    const query = new GetTaskQuery(userId);
    const tasks: Task[] = await this.queryBus.execute(query);
    return tasks;
  }
}
