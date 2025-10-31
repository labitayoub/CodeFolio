import { type IDocument } from './document.model.js';
export declare class DocumentService {
    static getAll(): Promise<(import("mongoose").Document<unknown, {}, import("./document.model.js").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & IDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    static getById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./document.model.js").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & IDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    static create(data: Partial<IDocument>): Promise<import("mongoose").Document<unknown, {}, import("./document.model.js").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & IDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    static update(id: string, data: Partial<IDocument>): Promise<(import("mongoose").Document<unknown, {}, import("./document.model.js").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & IDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    static delete(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./document.model.js").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & IDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
//# sourceMappingURL=document.service.d.ts.map