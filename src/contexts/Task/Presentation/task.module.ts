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

const QueryHandlers = [GetTaskHandler];
const CommandHandlers = [CreateTaskHandler];
const Actions = [GetTask, CreateTask];

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
