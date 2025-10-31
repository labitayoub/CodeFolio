import { Schema, model } from 'mongoose';
const resieauxSociauxSchema = new Schema({
    nom: { type: String, required: true },
    liensSociaux: { type: String, required: true },
    icon: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
export const ReseauxSociaux = model('ReseauxSociaux', resieauxSociauxSchema);
//# sourceMappingURL=resieauxSociaux.model.js.map