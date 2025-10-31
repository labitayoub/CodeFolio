import { Document, Types } from 'mongoose';
export interface IReseauxSociaux {
    nom: string;
    liensSociaux: string;
    icon: string;
    userId: Types.ObjectId;
}
export type IReseauxSociauxDocument = IReseauxSociaux & Document;
export declare const ReseauxSociaux: import("mongoose").Model<IReseauxSociauxDocument, {}, {}, {}, Document<unknown, {}, IReseauxSociauxDocument, {}, {}> & IReseauxSociaux & Document<unknown, any, any, Record<string, any>, {}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=resieauxSociaux.model.d.ts.map