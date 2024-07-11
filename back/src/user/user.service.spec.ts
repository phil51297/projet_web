import { UserService } from './user.service';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should return all users', () => {
    expect(service.findAll()).toEqual([]);
  });

  it('should return a user with a specific id', async () => {
    const username = 'test';
    const password = 'password123';
    const createdUser = await service.create(username, password);
    const foundUser = service.findOneById(createdUser.id);
    expect(foundUser).toBeDefined();
    expect(foundUser.username).toEqual(username);
  });

  it('should create a new user with hashed password', async () => {
    const username = 'test';
    const password = 'password123';
    const user: User = await service.create(username, password);
    const allUsers = service.findAll();
    expect(allUsers).toContainEqual(
      expect.objectContaining({ username: 'test' }),
    );
    expect(await bcrypt.compare(password, user.password)).toBe(true);
  });

  it('should validate a user with correct password', async () => {
    const username = 'test';
    const password = 'password123';
    await service.create(username, password);
    const isValid = await service.validateUser(username, password);
    expect(isValid).toBe(true);
  });

  it('should not validate a user with incorrect password', async () => {
    const username = 'test';
    const password = 'password123';
    await service.create(username, password);
    const isValid = await service.validateUser(username, 'wrongpassword');
    expect(isValid).toBe(false);
  });
});
