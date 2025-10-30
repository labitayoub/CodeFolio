export const resolvers = {
    Query: {
        getProfil: () => {
            // Mock data for now
            return {
                id: '1',
                nom: 'Mashate',
                prenom: 'Ayoub',
                email: 'ayoub@example.com',
                bio: 'Full-stack developer'
            };
        }
    },
    Mutation: {
        login: (parent, { email, password }) => {
            // Mock data for now
            console.log(`Login attempt with email: ${email}`);
            return 'mock-jwt-token';
        },
        updateProfil: (parent, args) => {
            // Mock data for now
            console.log('Updating profile with:', args);
            return {
                id: '1',
                nom: args.nom || 'Mashate',
                prenom: args.prenom || 'Ayoub',
                email: args.email || 'ayoub@example.com',
                bio: args.bio || 'Full-stack developer'
            };
        }
    }
};
//# sourceMappingURL=user.resolvers.js.map