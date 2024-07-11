import { Test } from '@nestjs/testing';
import { ConversationService } from './conversation.service';
import { User } from '../user/models/user.model';

jest.mock('uuid', () => ({
  v4: () => 'test-uuid',
}));

describe('ConversationService', () => {
  let service: ConversationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ConversationService],
    }).compile();

    service = module.get<ConversationService>(ConversationService);
  });

  it('should create a conversation', () => {
    const user1: User = { id: '1', username: 'user1' } as User;
    const user2: User = { id: '2', username: 'user2' } as User;
    const conversation = service.create(user1, user2);
    expect(conversation).toEqual({
      id: 'test-uuid',
      name: 'user1-user2',
      user1,
      user2,
      messages: [],
    });
  });

  it('should find all conversations', async () => {
    const conversations = await service.findAll();
    expect(Array.isArray(conversations)).toBeTruthy();
    expect(conversations.length).toBeGreaterThanOrEqual(0);
  });

  it('should find a conversation by ID', async () => {
    const user1: User = { id: '1', username: 'user1' } as User;
    const user2: User = { id: '2', username: 'user2' } as User;
    service.create(user1, user2); 
    const conversationId = 'test-uuid';
    const conversation = await service.findOneById(conversationId);
    expect(conversation).toBeDefined();
    expect(conversation.id).toEqual(conversationId);
  });

  it('should find conversations by user', async () => {
    const user: User = { id: '1', username: 'user1' } as User;
    const conversations = await service.findByUser(user.id);
    expect(Array.isArray(conversations)).toBeTruthy();
    conversations.forEach((conv) => {
      expect([conv.user1, conv.user2]).toContainEqual(user.id);
    });
  });
});
