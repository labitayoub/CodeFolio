import { UserService } from '../user.service.js';

export const resolvers = {
  Query: {
    getProfil: async (parent: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await UserService.getProfil(context.userId);
    }
  },
  Mutation: {
    register: async (parent: any, args: any) => {
      return await UserService.register(args);
    },
    login: async (parent: any, { email, password }: any) => {
      return await UserService.login(email, password);
    },
    updateProfil: async (parent: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await UserService.updateProfil(context.userId, args);
    }
  }
};
