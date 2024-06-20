import { Test } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { User } from './models/user.model';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let service: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            create: jest
              .fn()
              .mockImplementation((username: string) =>
                Promise.resolve({ id: '1', username }),
              ),
          },
        },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
    service = module.get<UserService>(UserService);
  });

  it('should return all users', async () => {
    expect(await resolver.users()).toEqual([]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should create a new user', async () => {
    const username = 'test';
    const user: User = { id: '1', username };
    expect(await resolver.createUser(username)).toEqual(user);
    expect(service.create).toHaveBeenCalledWith(username);
  });
});
