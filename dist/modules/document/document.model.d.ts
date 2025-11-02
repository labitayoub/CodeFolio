import { Document, Types } from 'mongoose';
export interface IDocument {
    nom: string;
    urlStocket: string;
    userId: Types.ObjectId;
}
export type IDocumentDocument = Document & IDocument;
export declare const DocumentModel: import("mongoose").Model<IDocumentDocument, {}, {}, {}, Document<unknown, {}, IDocumentDocument, {}, {}> & Document<unknown, any, any, Record<string, any>, {}> & IDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
