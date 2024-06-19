import { IMessage } from "./models/message.model";
import { MessageService } from './message.service';

const messageResolver = {
  Query: {
    conversationMessages: (parent: any, { conversationId }: { conversationId: string }) => {
      return MessageService.getConversationMessages(conversationId);
    }
  },
  Mutation: {
    sendMessage: (parent: any, { conversationId, senderId, content }: { conversationId: string, senderId: string, content: string }) => {
      return MessageService.sendMessage(conversationId, senderId, content);
    }
  },
  Message: {
    sender: (parent: IMessage) => {
      return parent.sender;
    }
  }
};

export default messageResolver;
