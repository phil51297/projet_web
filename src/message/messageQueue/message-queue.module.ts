// message-queue.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MessageQueueService } from './message-queue.service';
import { MessageQueueProcessor } from './message-queue.processor';
import { MessageModule } from '../message.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'message-queue',
    }),
    MessageModule,
  ],
  providers: [MessageQueueService, MessageQueueProcessor],
  exports: [MessageQueueService],
})
export class MessageQueueModule {}
