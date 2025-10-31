import { Document } from 'mongoose';
export interface IUser {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    bio?: string;
}
export type IUserDocument = IUser & Document;
export declare const UserModel: import("mongoose").Model<unknown, unknown, unknown, unknown, Document<unknown, unknown, unknown, unknown, unknown> & Omit<{
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, never>, IUserDocument>;
//# sourceMappingURL=user.model.d.ts.map