import { Schema } from 'mongoose';
export declare const UserModel: import("mongoose").Model<{
    nom: string;
    prenom: string;
    email: string;
    password: string;
    bio?: string | null | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    bio?: string | null | undefined;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    bio?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    bio?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    nom: string;
    prenom: string;
    email: string;
    password: string;
    bio?: string | null | undefined;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    nom: string;
    prenom: string;
    email: string;
    password: string;
    bio?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=user.model.d.ts.map