
import { Document, Schema, model, Types } from 'mongoose';

export interface IExperience {
  poste: string;
  entreprise: string;
  dateDebut: Date;
  dateFinal: Date;
  description: string;
  userId: Types.ObjectId;
}

export type IExperienceDocument = IExperience & Document;

const experienceSchema = new Schema<IExperienceDocument>({
  poste: { type: String, required: true },
  entreprise: { type: String, required: true },
  dateDebut: { type: Date, required: true },
  dateFinal: { type: Date, required: true },
  description: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Experience = model<IExperienceDocument>('Experience', experienceSchema);