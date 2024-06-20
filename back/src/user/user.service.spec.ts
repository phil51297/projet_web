import { UserService } from './user.service';
import { User } from './models/user.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should return all users', () => {
    expect(service.findAll()).toEqual([]);
  });

  it('should return a user with a specific id', () => {
    const username = 'test';
    const createdUser = service.create(username);
    const foundUser = service.findOneById(createdUser.id);
    expect(foundUser).toBeDefined();
    expect(foundUser.username).toEqual(username);
  });

  it('should create a new user', () => {
    const user: User = service.create('test');
    expect(service.findAll()).toContain(user);
  });
});
