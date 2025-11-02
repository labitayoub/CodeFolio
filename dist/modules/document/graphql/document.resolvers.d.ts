export declare const documentResolvers: {
    Query: {
        documents: () => Promise<(import("mongoose").Document<unknown, {}, import("../document.model").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & import("../document.model").IDocument & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[]>;
        document: (_: any, { id }: {
            id: string;
        }) => Promise<(import("mongoose").Document<unknown, {}, import("../document.model").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & import("../document.model").IDocument & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }) | null>;
    };
    Mutation: {
        createDocument: (_: any, { input }: {
            input: any;
        }) => Promise<import("mongoose").Document<unknown, {}, import("../document.model").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & import("../document.model").IDocument & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>;
        updateDocument: (_: any, { id, input }: {
            id: string;
            input: any;
        }) => Promise<(import("mongoose").Document<unknown, {}, import("../document.model").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & import("../document.model").IDocument & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }) | null>;
        deleteDocument: (_: any, { id }: {
            id: string;
        }) => Promise<(import("mongoose").Document<unknown, {}, import("../document.model").IDocumentDocument, {}, {}> & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & import("../document.model").IDocument & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }) | null>;
    };
};
