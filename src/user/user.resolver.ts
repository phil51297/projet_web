import { IUser } from "./models/user.model";
import { UserService } from './user.service';

const userResolver = {
  User: {
    conversations: (parent: IUser) => {
      return parent.conversations;
    }
  }
};

export default userResolver;
