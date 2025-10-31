

import { Document, Schema, model } from 'mongoose';

export interface IUser {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  bio?: string;
}

export type IUserDocument = IUser & Document;


const userSchema = new Schema<IUserDocument>({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String }
});

export const UserModel = model<IUserDocument>('User', userSchema);
