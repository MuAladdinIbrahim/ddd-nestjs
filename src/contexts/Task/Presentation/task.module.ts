import { Module } from '@nestjs/common';
import { TaskResolver } from './resolvers/task.resolver';

@Module({
  providers: [TaskResolver],
})
export class taskMoudle {}
