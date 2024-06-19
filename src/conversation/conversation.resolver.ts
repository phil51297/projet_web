import { IConversation } from "./models/conversation.model";
import { ConversationService } from './conversation.service';

const conversationResolver = {
  Query: {
    userConversations: (parent: any, { userId }: { userId: string }) => {
      return ConversationService.getUserConversations(userId);
    }
  },
  Mutation: {
    createConversation: (parent: any, { userId1, userId2 }: { userId1: string, userId2: string }) => {
      return ConversationService.createConversation(userId1, userId2);
    }
  },
  Conversation: {
    participants: (parent: IConversation) => {
      return parent.participants;
    },
    messages: (parent: IConversation) => {
      return parent.messages;
    }
  }
};

export default conversationResolver;
