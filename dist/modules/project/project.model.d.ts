import { Document } from 'mongoose';
export interface IProject {
    title: string;
    description: string;
    skills: string[];
}
export type IProjectDocument = IProject & Document;
export declare const ProjectModel: import("mongoose").Model<unknown, unknown, unknown, unknown, Document<unknown, unknown, unknown, unknown, unknown> & Omit<{
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, never>, IProjectDocument>;
//# sourceMappingURL=project.model.d.ts.map