import type { IUser, IUserDocument } from './user.model.js';
export declare class UserService {
    register(args: IUser): Promise<IUserDocument>;
    login(email: string, password: string): Promise<string>;
    getProfil(userId: string): Promise<IUserDocument | null>;
    updateProfil(userId: string, args: Partial<IUser>): Promise<IUserDocument | null>;
}
//# sourceMappingURL=user.service.d.ts.map