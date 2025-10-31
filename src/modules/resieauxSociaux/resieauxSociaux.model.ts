import { Document, Schema, model, Types } from 'mongoose';

export interface IReseauxSociaux {
  nom: string;
  liensSociaux: string;
  icon: string;
  userId: Types.ObjectId;
}

export type IReseauxSociauxDocument = IReseauxSociaux & Document;

const resieauxSociauxSchema = new Schema<IReseauxSociauxDocument>({
  nom: { type: String, required: true },
  liensSociaux: { type: String, required: true },
  icon: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const ReseauxSociaux = model<IReseauxSociauxDocument>('ReseauxSociaux', resieauxSociauxSchema);