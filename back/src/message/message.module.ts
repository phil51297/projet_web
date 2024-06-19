import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';
import { ConversationModule } from '../conversation/conversation.module';
import { UserModule } from '../user/user.module';
import { MessageProcessor } from './message.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'messageQueue',
    }),
    ConversationModule,
    UserModule,
  ],
  providers: [MessageResolver, MessageService, MessageProcessor],
})
export class MessageModule {}
