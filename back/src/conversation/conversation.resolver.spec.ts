import { Test } from '@nestjs/testing';
import { ConversationResolver } from './conversation.resolver';
import { ConversationService } from './conversation.service';
import { UserService } from '../user/user.service';

describe('ConversationResolver', () => {
  let resolver: ConversationResolver;
  let conversationService: ConversationService;
  let userService: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ConversationResolver,
        {
          provide: ConversationService,
          useValue: {
            findAll: jest.fn(),
            findByUser: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: UserService,
          useValue: {
            findOneById: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<ConversationResolver>(ConversationResolver);
    conversationService = module.get<ConversationService>(ConversationService);
    userService = module.get<UserService>(UserService);
  });

  it('should return all conversations', async () => {
    const mockConversations = [
      {
        id: '1',
        name: 'conversation1',
        user1: { id: '1' },
        user2: { id: '2' },
        messages: [],
      },
      {
        id: '2',
        name: 'conversation2',
        user1: { id: '3' },
        user2: { id: '4' },
        messages: [],
      },
    ];
    conversationService.findAll = jest
      .fn()
      .mockResolvedValue(mockConversations);

    expect(await resolver.conversations()).toEqual(mockConversations);
    expect(conversationService.findAll).toHaveBeenCalled();
  });

  it('should return conversations by user', async () => {
    const userId = '1';
    const mockConversationsByUser = [
      {
        id: '1',
        name: 'conversation1',
        user1: { id: '1' },
        user2: { id: '2' },
        messages: [],
      },
    ];
    conversationService.findByUser = jest
      .fn()
      .mockResolvedValue(mockConversationsByUser);

    expect(await resolver.conversationsByUser(userId)).toEqual(
      mockConversationsByUser,
    );
    expect(conversationService.findByUser).toHaveBeenCalledWith(userId);
  });

  it('should create a conversation', async () => {
    const user1Id = '1';
    const user2Id = '2';
    const mockConversation = {
      id: '3',
      name: 'conversation3',
      user1: { id: '1' },
      user2: { id: '2' },
      messages: [],
    };

    userService.findOneById = jest.fn().mockImplementation((id) => ({ id }));
    conversationService.create = jest.fn().mockResolvedValue(mockConversation);

    expect(await resolver.createConversation(user1Id, user2Id)).toEqual(
      mockConversation,
    );
    expect(userService.findOneById).toHaveBeenCalledWith(user1Id);
    expect(userService.findOneById).toHaveBeenCalledWith(user2Id);
    expect(conversationService.create).toHaveBeenCalledWith(
      { id: user1Id },
      { id: user2Id },
    );
  });
});
