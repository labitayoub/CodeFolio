export declare const resolvers: {
    Query: {
        getProfil: () => {
            id: string;
            nom: string;
            prenom: string;
            email: string;
            bio: string;
        };
    };
    Mutation: {
        login: (parent: any, { email, password }: {
            email: any;
            password: any;
        }) => string;
        updateProfil: (parent: any, args: any) => {
            id: string;
            nom: any;
            prenom: any;
            email: any;
            bio: any;
        };
    };
};
//# sourceMappingURL=user.resolvers.d.ts.map