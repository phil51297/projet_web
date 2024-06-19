import { Message, IMessage } from './models/message.model';
import { ConversationService } from 'src/conversation/conversation.service';
import { UserService } from 'src/user/user.service';

export class MessageService {
  static getConversationMessages(conversationId: string): IMessage[] {
    const conversation = ConversationService.getConversationById(conversationId);
    return conversation ? conversation.messages : [];
  }

  static sendMessage(conversationId: string, senderId: string, content: string): IMessage {
    const conversation = ConversationService.getConversationById(conversationId);
    if (!conversation) {
      throw new Error('Conversation not found');
    }

    const sender = UserService.getUserById(senderId);
    if (!sender) {
      throw new Error('Sender not found');
    }

    const newMessage = new Message(content, sender);
    conversation.messages.push(newMessage);

    return newMessage;
  }
}
