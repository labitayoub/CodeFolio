import { UserService } from '../user.service.js';
export const resolvers = {
    Query: {
        getProfil: async (parent, args, context) => {
            if (!context.userId) {
                throw new Error('Authentication required');
            }
            return await UserService.getProfil(context.userId);
        }
    },
    Mutation: {
        register: async (parent, args) => {
            return await UserService.register(args);
        },
        login: async (parent, { email, password }) => {
            return await UserService.login(email, password);
        },
        updateProfil: async (parent, args, context) => {
            if (!context.userId) {
                throw new Error('Authentication required');
            }
            return await UserService.updateProfil(context.userId, args);
        }
    }
};
//# sourceMappingURL=user.resolvers.js.map