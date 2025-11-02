import { Document, Types } from 'mongoose';
export interface ISkill {
    nom: string;
    categorie: string;
    userId: Types.ObjectId;
}
export type ISkillDocument = ISkill & Document;
export declare const Skill: import("mongoose").Model<ISkillDocument, {}, {}, {}, Document<unknown, {}, ISkillDocument, {}, {}> & ISkill & Document<unknown, any, any, Record<string, any>, {}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
