import { Document, Schema, model } from 'mongoose';
const skillSchema = new Schema({
    nom: { type: String, required: true },
    categorie: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
export const Skill = model('Skill', skillSchema);
//# sourceMappingURL=skill.model.js.map