
import { Document, Schema, model, Types } from 'mongoose';

export interface ISkill {
  nom: string;
  categorie: string;
  userId: Types.ObjectId;
}

export type ISkillDocument = ISkill & Document;

const skillSchema = new Schema<ISkillDocument>({
  nom: { type: String, required: true },
  categorie: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Skill = model<ISkillDocument>('Skill', skillSchema);