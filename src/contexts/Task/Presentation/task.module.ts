import { Module } from '@nestjs/common';
import { GetTaskHandler } from '../Application/Get/GetTaskHandler';
import TaskRepository from '../Infra/Persistence/TaskRepository';
import { TaskResolver } from './resolvers/task.resolver';
import { CqrsModule } from '@nestjs/cqrs';
import GetTask from '../Application/Get/GetTask';
import TaskDbClient from '../Infra/Persistence/TaskDbClient';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModel } from '../Infra/Persistence/task.model';
import CreateTaskHandler from '../Application/Create/CreateTaskCommandHanlder';
import CreateTask from '../Application/Create/CreateTask';
import UpdateTaskStatus from '../Application/Update/UpdateTaskStatus';
import UpdateTaskStatusHandler from '../Application/Update/UpdateTaskStatusCommandHandler';

const QueryHandlers = [GetTaskHandler];
const CommandHandlers = [CreateTaskHandler, UpdateTaskStatusHandler];
const Actions = [GetTask, CreateTask, UpdateTaskStatus];

@Module({
  imports: [CqrsModule, SequelizeModule.forFeature([TaskModel])],
  providers: [
    TaskResolver,
    ...QueryHandlers,
    ...CommandHandlers,
    TaskRepository,
    ...Actions,
    TaskDbClient,
  ],
})
export class taskMoudle {}
