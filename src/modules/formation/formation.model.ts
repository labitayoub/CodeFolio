
import { Document, Schema, model, Types } from 'mongoose';

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

const formationSchema = new Schema<IFormationDocument>({
  filiere: { type: String, required: true },
  ecole: { type: String, required: true },
  localisation: { type: String, required: true },
  dateDebut: { type: Date, required: true },
  dateFinal: { type: Date, required: true },
  description: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Formation = model<IFormationDocument>('Formation', formationSchema);