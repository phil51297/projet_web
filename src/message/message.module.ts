import { Module } from '@nestjs/common';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';
import { ConversationModule } from '../conversation/conversation.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [ConversationModule, UserModule],
  providers: [MessageResolver, MessageService],
})
export class MessageModule {}
