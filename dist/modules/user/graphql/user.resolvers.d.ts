export declare const resolvers: {
    Query: {
        getProfil: (parent: any, args: any, context: any) => Promise<import("../user.model.js").IUserDocument | null>;
    };
    Mutation: {
        register: (parent: any, args: any) => Promise<import("../user.model.js").IUserDocument>;
        login: (parent: any, { email, password }: any) => Promise<string>;
        updateProfil: (parent: any, args: any, context: any) => Promise<import("../user.model.js").IUserDocument | null>;
    };
};
//# sourceMappingURL=user.resolvers.d.ts.map