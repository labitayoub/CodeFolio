import { Document } from 'mongoose';
export interface IFormation {
    filiere: string;
    ecole: string;
    localisation: string;
    dateDebut: Date;
    dateFinal: Date;
    description: string;
    userId: string;
}
export type IFormationDocument = IFormation & Document;
export declare const Formation: import("mongoose").Model<unknown, unknown, unknown, unknown, Document<unknown, unknown, unknown, unknown, unknown> & Omit<{
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, never>, IFormationDocument>;
//# sourceMappingURL=formation.model.d.ts.map