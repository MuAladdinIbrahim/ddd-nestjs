import Task from '../Task';

export default interface ITaskRepository {
  find(query, options?): Promise<Task[]>;
  update(query, updates): Promise<any>;
  save(task: Task): Promise<void>;
}
