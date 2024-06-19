import { Conversation, IConversation } from "src/conversation/models/conversation.model";
import { UserService } from "src/user/user.service";

let conversations: IConversation[] = [];

export class ConversationService {
  static getUserConversations(userId: string): IConversation[] {
    return conversations.filter(conversation =>
      conversation.participants.some(participant => participant.id === userId)
    );
  }

  static createConversation(userId1: string, userId2: string): IConversation {
    const user1 = UserService.getUserById(userId1);
    const user2 = UserService.getUserById(userId2);

    if (!user1 || !user2) {
      throw new Error('Invalid user IDs');
    }

    const newConversation = new Conversation([user1, user2]);
    conversations.push(newConversation);

    user1.conversations.push(newConversation);
    user2.conversations.push(newConversation);

    return newConversation;
  }

  static getConversationById(conversationId: string): IConversation | undefined {
    return conversations.find(conversation => conversation.id === conversationId);
 }
}
