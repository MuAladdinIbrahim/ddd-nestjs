import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTaskQuery } from './GetTaskQuery.query';
import GetTask from './GetTask';
import { Inject } from '@nestjs/common';

@QueryHandler(GetTaskQuery)
export class GetTaskHandler implements IQueryHandler<GetTaskQuery> {
  constructor(
    @Inject('GET_TASK')
    private readonly getTask: GetTask,
  ) {}

  async execute(query: GetTaskQuery) {
    return this.getTask.get(query.userId);
  }
}
