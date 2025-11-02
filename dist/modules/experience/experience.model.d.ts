import { Document, Types } from 'mongoose';
export interface IExperience {
    poste: string;
    entreprise: string;
    dateDebut: Date;
    dateFinal: Date;
    description: string;
    userId: Types.ObjectId;
}
export type IExperienceDocument = IExperience & Document;
export declare const Experience: import("mongoose").Model<IExperienceDocument, {}, {}, {}, Document<unknown, {}, IExperienceDocument, {}, {}> & IExperience & Document<unknown, any, any, Record<string, any>, {}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
