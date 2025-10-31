import { Document } from 'mongoose';
export interface ISkill {
    nom: string;
    categorie: string;
    userId: string;
}
export type ISkillDocument = ISkill & Document;
export declare const Skill: import("mongoose").Model<unknown, unknown, unknown, unknown, Document<unknown, unknown, unknown, unknown, unknown> & Omit<{
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, never>, ISkillDocument>;
//# sourceMappingURL=skill.model.d.ts.map