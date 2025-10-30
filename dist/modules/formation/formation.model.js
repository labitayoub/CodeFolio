import { Schema, model } from 'mongoose';
const formationSchema = new Schema({
    filiere: String,
    ecole: String,
    localisation: String,
    dateDebut: Date,
    dateFinal: Date,
    description: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
});
export const Formation = model('Formation', formationSchema);
//# sourceMappingURL=formation.model.js.map