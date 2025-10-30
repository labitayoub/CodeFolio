import { Schema, model } from 'mongoose';

const experienceSchema = new Schema({
  poste: String,
  entreprise: String,
  dateDebut: Date,
  dateFinal: Date,
  description: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

export const Experience = model('Experience', experienceSchema);