import { Schema, model } from 'mongoose';
const formationSchema = new Schema({
    filiere: { type: String, required: true },
    ecole: { type: String, required: true },
    localisation: { type: String, required: true },
    dateDebut: { type: Date, required: true },
    dateFinal: { type: Date, required: true },
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
export const Formation = model('Formation', formationSchema);
//# sourceMappingURL=formation.model.js.map