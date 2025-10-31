import { Document, Schema, model, Types } from 'mongoose';
const documentSchema = new Schema({
    nom: { type: String, required: true },
    urlStocket: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
export const DocumentModel = model('Document', documentSchema);
//# sourceMappingURL=document.model.js.map