import { UserService } from '../user.service.js';

const userService = new UserService();

export const resolvers = {
  Query: {
    getProfil: async (parent: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await userService.getProfil(context.userId);
    }
  },
  Mutation: {
    register: async (parent: any, args: any) => {
      return await userService.register(args);
    },
    login: async (parent: any, { email, password }: any) => {
      return await userService.login(email, password);
    },
    updateProfil: async (parent: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await userService.updateProfil(context.userId, args);
    }
  }
};
