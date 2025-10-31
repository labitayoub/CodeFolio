import { UserService } from '../user.service.js';
const userService = new UserService();
export const resolvers = {
    Query: {
        getProfil: async (parent, args, context) => {
            if (!context.userId) {
                throw new Error('Authentication required');
            }
            return await userService.getProfil(context.userId);
        }
    },
    Mutation: {
        register: async (parent, args) => {
            return await userService.register(args);
        },
        login: async (parent, { email, password }) => {
            return await userService.login(email, password);
        },
        updateProfil: async (parent, args, context) => {
            if (!context.userId) {
                throw new Error('Authentication required');
            }
            return await userService.updateProfil(context.userId, args);
        }
    }
};
//# sourceMappingURL=user.resolvers.js.map