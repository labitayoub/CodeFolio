import type { IUser, IUserDocument } from './user.model.js';
export declare class UserService {
    static register(args: IUser): Promise<IUserDocument>;
    static login(email: string, password: string): Promise<string>;
    static getProfil(userId: string): Promise<IUserDocument | null>;
    static updateProfil(userId: string, args: Partial<IUser>): Promise<IUserDocument | null>;
}
