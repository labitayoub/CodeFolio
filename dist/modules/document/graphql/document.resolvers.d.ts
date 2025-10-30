export declare const documentResolvers: {
    Query: {
        documents: () => any;
        document: (_: any, { id }: {
            id: string;
        }) => any;
    };
    Mutation: {
        createDocument: (_: any, args: any) => any;
        updateDocument: (_: any, { id, ...data }: any) => any;
        deleteDocument: (_: any, { id }: {
            id: string;
        }) => any;
    };
};
//# sourceMappingURL=document.resolvers.d.ts.map