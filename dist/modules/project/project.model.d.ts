import { Document, Types } from 'mongoose';
export interface IProject {
    titre: string;
    description: string;
    urlGit: string;
    urlDemo: string;
    image: string;
    userId: Types.ObjectId;
}
export type IProjectDocument = IProject & Document;
export declare const ProjectModel: import("mongoose").Model<IProjectDocument, {}, {}, {}, Document<unknown, {}, IProjectDocument, {}, {}> & IProject & Document<unknown, any, any, Record<string, any>, {}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=project.model.d.ts.map