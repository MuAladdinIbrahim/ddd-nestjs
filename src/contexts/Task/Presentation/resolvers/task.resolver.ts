import { Resolver, Query, Args } from '@nestjs/graphql';
import GetTask from '../../Application/Get/GetTask';
import { TaskModel } from '../../Infra/Persistence/task.model';
import Task from '../../Task';

@Resolver((of) => TaskModel)
export class TaskResolver {
  // constructor(private readonly repo: any) {}
  @Query((returns) => [TaskModel])
  find(@Args('userId') id: string): Promise<Task[]> {
    const getTask = new GetTask();
    return getTask.get(id);
  }
}
