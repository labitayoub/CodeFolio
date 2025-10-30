import { Schema, model } from 'mongoose';

const skillSchema = new Schema({
  nom: String,
  categorie: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

export const Skill = model('Skill', skillSchema);