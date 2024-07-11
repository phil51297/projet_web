import { Test } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';

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
            create: jest.fn().mockImplementation(async (username: string, password: string) => {
              const salt = await bcrypt.genSalt();
              const hashedPassword = await bcrypt.hash(password, salt);
              return { id: '1', username, password: hashedPassword };
            }),
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
    const password = 'password123';
    const user: User = { id: '1', username, password: await bcrypt.hash(password, await bcrypt.genSalt()) };
    expect(await resolver.createUser(username, password)).toEqual({
      id: user.id,
      username: user.username,
      password: expect.any(String)
    });
    expect(service.create).toHaveBeenCalledWith(username, password);
  });
});
