import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { TaskModel } from '../../Infra/Persistence/task.model';
import Task from '../../Domain/Task';
import { GetTaskQuery } from '../../Application/Get/GetTaskQuery.query';
import FindTasksArgsDto from '../dtos/findTasksArgs.dto';
import CreateTaskInputDto from '../dtos/createTaskInput.dto';
import CreateTaskCommand from '../../Application/Create/CreateTaskCommand.command';
import UpdateTaskStatusInputDto from '../dtos/updateTaskStatus.dto';
import UpdateTaskStatusCommand from '../../Application/Update/UpdateTaskStatusCommand.command';

@Resolver((of) => TaskModel)
export class TaskResolver {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}
  @Query((returns) => [TaskModel])
  async find(@Args('args') args: FindTasksArgsDto): Promise<Task[]> {
    const query = new GetTaskQuery(args.userId);
    //TODO replace Task[] with GetTaskResponse
    const tasks: Task[] = await this.queryBus.execute(query);
    return tasks;
  }
  @Mutation((returns) => TaskModel, { nullable: true })
  async create(@Args('input') input: CreateTaskInputDto): Promise<any> {
    const command = new CreateTaskCommand(
      null,
      input.title,
      input.description,
      input.status,
      input.userId,
    );
    const task: Task = await this.commandBus.execute(command);
    const response = {
      id: task.id.value,
      title: task.title.value,
      status: task.status.value,
      description: task.description.value,
      userId: task.userId.value,
    };
    return response;
  }

  @Mutation((returns) => TaskModel, { nullable: true })
  async update(@Args('input') input: UpdateTaskStatusInputDto): Promise<any> {
    const command = new UpdateTaskStatusCommand(input.id, input.status);
    const task: Task = await this.commandBus.execute(command);
    const response = {
      id: task.id.value,
      title: task.title.value,
      status: task.status.value,
      description: task.description.value,
      userId: task.userId.value,
    };
    return response;
  }
}
