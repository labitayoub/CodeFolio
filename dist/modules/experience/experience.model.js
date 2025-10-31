import { Schema, model } from 'mongoose';
const experienceSchema = new Schema({
    poste: { type: String, required: true },
    entreprise: { type: String, required: true },
    dateDebut: { type: Date, required: true },
    dateFinal: { type: Date, required: true },
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
export const Experience = model('Experience', experienceSchema);
//# sourceMappingURL=experience.model.js.map