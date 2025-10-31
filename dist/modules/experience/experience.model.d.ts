import { Document } from 'mongoose';
export interface IExperience {
    poste: string;
    entreprise: string;
    dateDebut: Date;
    dateFinal: Date;
    description: string;
    userId: string;
}
export type IExperienceDocument = IExperience & Document;
export declare const Experience: import("mongoose").Model<unknown, unknown, unknown, unknown, Document<unknown, unknown, unknown, unknown, unknown> & Omit<{
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, never>, IExperienceDocument>;
//# sourceMappingURL=experience.model.d.ts.map