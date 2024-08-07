import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { getQueueToken } from '@nestjs/bull';
import { Queue } from 'bull';

describe('AppService', () => {
  let appService: AppService;
  let healthQueueMock: jest.Mocked<Queue>;

  beforeEach(async () => {
    healthQueueMock = {
      add: jest.fn(),
    } as unknown as jest.Mocked<Queue>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getQueueToken('health-queue'),
          useValue: healthQueueMock,
        },
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should return "Hello World!"', () => {
    expect(appService.getHello()).toBe('Hello World!');
  });

  it('should add a job to the healthQueue', async () => {
    await appService.transcode();
    expect(healthQueueMock.add).toHaveBeenCalledWith({
      Hello: 'world',
    });
  });
});
