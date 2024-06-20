import { Test } from '@nestjs/testing';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';
import { UserService } from '../user/user.service';
import { Message } from './models/message.model';

describe('MessageResolver', () => {
  let resolver: MessageResolver;
  let messageService: MessageService;
  let userService: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MessageResolver,
        {
          provide: MessageService,
          useValue: {
            findMessagesByConversation: jest.fn().mockResolvedValue([]),
            sendMessage: jest.fn().mockResolvedValue({} as Message),
          },
        },
        {
          provide: UserService,
          useValue: {
            findOneById: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    resolver = module.get<MessageResolver>(MessageResolver);
    messageService = module.get<MessageService>(MessageService);
    userService = module.get<UserService>(UserService);
  });

  it('should return all messages by conversation', async () => {
    const conversationId = '1';
    expect(await resolver.messagesByConversation(conversationId)).toEqual([]);
    expect(messageService.findMessagesByConversation).toHaveBeenCalledWith(
      conversationId,
    );
  });

  it('should send a message', async () => {
    const conversationId = '1';
    const userId = '1';
    const text = 'Hello';
    const user = await userService.findOneById(userId);
    const message = await messageService.sendMessage(
      conversationId,
      user,
      text,
    );
    expect(await resolver.sendMessage(conversationId, userId, text)).toEqual(
      message,
    );
    expect(messageService.sendMessage).toHaveBeenCalledWith(
      conversationId,
      user,
      text,
    );
  });
});
