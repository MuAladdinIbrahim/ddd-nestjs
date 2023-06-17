import { Processor, OnQueueActive, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
@Processor('event')
export default class EventProcessor {
  @OnQueueActive()
  async handle(job: Job) {
    Logger.debug(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @Process('event-added')
  async handleEvent(job: Job) {
    Logger.debug({ job });
    let progress = 0;
    job.progress(++progress);
  }
}
