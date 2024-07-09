import { Test } from '@nestjs/testing';
import { MessageProcessor } from './message.processor';
import { ConversationService } from '../conversation/conversation.service';
import { Job } from 'bull';
import { Message } from './models/message.model';

describe('MessageProcessor', () => {
  let processor: MessageProcessor;
  let service: ConversationService;

  const mockConversation = { id: '1', messages: [] };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MessageProcessor,
        {
          provide: ConversationService,
          useValue: {
            findOneById: jest.fn().mockImplementation(() => mockConversation),
          },
        },
      ],
    }).compile();

    processor = module.get<MessageProcessor>(MessageProcessor);
    service = module.get<ConversationService>(ConversationService);
  });

  it('should add a new message to the conversation', async () => {
    const job: Job<{ conversationId: string; message: Partial<Message> }> = {
      data: {
        conversationId: '1',
        message: {
          id: '1',
          user: 'test',
          text: 'Hello',
          creationDate: new Date(),
        },
      },
    } as any;

    await processor.handleSendMessage(job);

    expect(service.findOneById).toHaveBeenCalledWith(job.data.conversationId);
    expect(
      service.findOneById(job.data.conversationId).messages,
    ).toContainEqual(job.data.message);
  });
});
