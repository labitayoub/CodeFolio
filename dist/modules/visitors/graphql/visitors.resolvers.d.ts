export declare const visitorsResolvers: {
    Query: {
        visitors: () => any;
        visitor: (_: any, { id }: {
            id: string;
        }) => any;
    };
    Mutation: {
        createVisitor: (_: any, args: any) => any;
        updateVisitor: (_: any, { id, ...data }: any) => any;
        deleteVisitor: (_: any, { id }: {
            id: string;
        }) => any;
    };
};
//# sourceMappingURL=visitors.resolvers.d.ts.map