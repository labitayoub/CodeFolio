
import { Document, Schema, model, Types } from 'mongoose';

export interface IDocument {
  nom: string;
  urlStocket: string;
  userId: Types.ObjectId;
}

export type IDocumentDocument = Document & IDocument;

const documentSchema = new Schema<IDocumentDocument>({
  nom: { type: String, required: true },
  urlStocket: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const DocumentModel = model<IDocumentDocument>('Document', documentSchema);