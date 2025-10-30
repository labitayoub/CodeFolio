import { Schema, model } from 'mongoose';
const resieauxSociauxSchema = new Schema({
    nom: String,
    liensSociaux: String,
    icon: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
});
export const ResieauxSociaux = model('ResieauxSociaux', resieauxSociauxSchema);
//# sourceMappingURL=resieauxSociaux.model.js.map