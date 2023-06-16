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
import TaskSagas from '../Domain/Sagas/TaskSagas';
import TaskUpdatedEventHandler from '../Domain/Events/TaskUpdatedEventHandler';
import { TaskInjections } from './Injections';
import MirrorData from '../Application/MirrorData/MirrorData';
import MirrorDataHandler from '../Application/MirrorData/MirrorDataCommandHandler';
import LocalStorage from '../Infra/Persistence/LocalStorage';

const QueryHandlers = [GetTaskHandler];
const CommandHandlers = [
  CreateTaskHandler,
  UpdateTaskStatusHandler,
  MirrorDataHandler,
];
const Actions = [GetTask, CreateTask, UpdateTaskStatus, MirrorData];
const Sagas = [TaskSagas];
const EventsHandlers = [TaskUpdatedEventHandler];

@Module({
  imports: [CqrsModule, SequelizeModule.forFeature([TaskModel])],
  providers: [
    TaskResolver,
    TaskDbClient,
    TaskRepository,
    LocalStorage,
    ...TaskInjections,
    ...QueryHandlers,
    ...CommandHandlers,
    ...Actions,
    ...EventsHandlers,
    ...Sagas,
  ],
})
export class taskMoudle {}
