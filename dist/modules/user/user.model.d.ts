import { Document } from 'mongoose';
export interface IUser {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    bio?: string;
}
export type IUserDocument = IUser & Document;
export declare const UserModel: import("mongoose").Model<IUserDocument, {}, {}, {}, Document<unknown, {}, IUserDocument, {}, {}> & IUser & Document<unknown, any, any, Record<string, any>, {}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
