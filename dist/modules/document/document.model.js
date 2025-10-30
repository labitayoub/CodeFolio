import { Schema, model } from 'mongoose';
const documentSchema = new Schema({
    nom: String,
    urlStocket: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
});
export const Document = model('Document', documentSchema);
//# sourceMappingURL=document.model.js.map