import { Document, Types } from 'mongoose';
export interface IFormation {
    filiere: string;
    ecole: string;
    localisation: string;
    dateDebut: Date;
    dateFinal: Date;
    description: string;
    userId: Types.ObjectId;
}
export type IFormationDocument = IFormation & Document;
export declare const Formation: import("mongoose").Model<IFormationDocument, {}, {}, {}, Document<unknown, {}, IFormationDocument, {}, {}> & IFormation & Document<unknown, any, any, Record<string, any>, {}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=formation.model.d.ts.map