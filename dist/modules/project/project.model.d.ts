import { Schema } from 'mongoose';
export declare const ProjectModel: import("mongoose").Model<{
    description: string;
    title: string;
    skills: import("mongoose").Types.ObjectId[];
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    description: string;
    title: string;
    skills: import("mongoose").Types.ObjectId[];
}, {}, import("mongoose").DefaultSchemaOptions> & {
    description: string;
    title: string;
    skills: import("mongoose").Types.ObjectId[];
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    description: string;
    title: string;
    skills: import("mongoose").Types.ObjectId[];
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    description: string;
    title: string;
    skills: import("mongoose").Types.ObjectId[];
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    description: string;
    title: string;
    skills: import("mongoose").Types.ObjectId[];
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=project.model.d.ts.map