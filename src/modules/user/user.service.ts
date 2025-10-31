import { UserModel } from './user.model.js';
import type { IUser, IUserDocument } from './user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class UserService {
  async register(args: IUser): Promise<IUserDocument> {
    const { nom, prenom, email, password, bio } = args;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ nom, prenom, email, password: hashedPassword, bio });
    return await user.save();
  }

  async login(email: string, password: string): Promise<string> {
  const user = await UserModel.findOne<IUserDocument>({ email });
    if (!user) {
      throw new Error('User not found');
    }

  const isPasswordValid = user ? await bcrypt.compare(password, user.password) : false;
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }

  return jwt.sign({ userId: user.id, nom: user.nom, prenom: user.prenom, email: user.email }, process.env.JWT_SECRET as string, { expiresIn: "24h" });
  }

  async getProfil(userId: string): Promise<IUserDocument | null> {
  return await UserModel.findById<IUserDocument>(userId);
  }

  async updateProfil(userId: string, args: Partial<IUser>): Promise<IUserDocument | null> {
  const user = await UserModel.findByIdAndUpdate<IUserDocument>(userId, args, { new: true });
  return user;
  }
}
