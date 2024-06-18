import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor('health-queue')
export class AppConsummer {
  private readonly logger = new Logger(AppConsummer.name);

  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(`Processing the job : ${job.id}`);
    this.logger.debug('Data:', job.data);
  }
}
