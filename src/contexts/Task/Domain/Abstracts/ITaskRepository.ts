import Task from '../Task';

export default interface ITaskRepository {
  find(query, options?): Promise<Task[]>;
}
