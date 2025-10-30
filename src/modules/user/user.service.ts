import { UserModel } from './user.model';

export class UserService {
  async getProfil() {
    // In a real app, you would fetch the user from the database
    // For now, we'll return a mock user
    return await UserModel.findOne({ email: 'ayoub@example.com' });
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // In a real app, you would compare the password with a hashed password
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   throw new Error('Invalid password');
    // }

    // In a real app, you would generate a JWT token
    // return jwt.sign({ userId: user.id }, 'your-secret-key');

    return 'mock-jwt-token';
  }

  async updateProfil(args) {
    // In a real app, you would find the user and update their profile
    // For now, we'll return a mock updated user
    const user = await UserModel.findOneAndUpdate({ email: 'ayoub@example.com' }, args, { new: true });
    return user;
  }
}
