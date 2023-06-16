import CreateTask from '../Application/Create/CreateTask';
import GetTask from '../Application/Get/GetTask';
import UpdateTaskStatus from '../Application/Update/UpdateTaskStatus';
import TaskDbClient from '../Infra/Persistence/TaskDbClient';
import TaskRepository from '../Infra/Persistence/TaskRepository';

export const TaskInjections = [
  {
    provide: 'TASK_REPOSITORY',
    useExisting: TaskRepository,
  },
  {
    provide: 'CREATE_TASK',
    useExisting: CreateTask,
  },
  {
    provide: 'GET_TASK',
    useExisting: GetTask,
  },
  {
    provide: 'UPDATE_TASK_STATUS',
    useExisting: UpdateTaskStatus,
  },
  {
    provide: 'TASK_DB_CLIENT',
    useExisting: TaskDbClient,
  },
];
