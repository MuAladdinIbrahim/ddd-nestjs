import CreateTask from '../Application/Create/CreateTask';
import GetTask from '../Application/Get/GetTask';
import UpdateTaskStatus from '../Application/Update/UpdateTaskStatus';
import TaskDbClient from '../Infra/Persistence/TaskDbClient';
import TaskRepository from '../Infra/Persistence/TaskRepository';

export const TaskDependency = {
  TASK_REPOSITORY: Symbol('TASK_REPOSITORY'),
  CREATE_TASK: Symbol('CREATE_TASK'),
  GET_TASK: Symbol('GET_TASK'),
  UPDATE_TASK_STATUS: Symbol('UPDATE_TASK_STATUS'),
  TASK_DB_CLIENT: Symbol('TASK_DB_CLIENT'),
};

export const TaskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useValue: TaskRepository,
  },
  {
    provide: 'CREATE_TASK',
    useValue: CreateTask,
  },
  {
    provide: 'GET_TASK',
    useValue: GetTask,
  },
  {
    provide: 'UPDATE_TASK_STATUS',
    useValue: UpdateTaskStatus,
  },
  {
    provide: 'TASK_DB_CLIENT',
    useValue: TaskDbClient,
  },
];
