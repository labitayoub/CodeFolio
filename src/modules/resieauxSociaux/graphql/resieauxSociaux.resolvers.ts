import { ResieauxSociauxService } from '../resieauxSociaux.service';

export const resieauxSociauxResolvers = {
  Query: {
    resieauxSociauxs: () => ResieauxSociauxService.getAll(),
    resieauxSociaux: (_: any, { id }: { id: string }) => ResieauxSociauxService.getById(id),
  },
  Mutation: {
    createResieauxSociaux: (_: any, args: any) => ResieauxSociauxService.create(args),
    updateResieauxSociaux: (_: any, { id, ...data }: any) => ResieauxSociauxService.update(id, data),
    deleteResieauxSociaux: (_: any, { id }: { id: string }) => ResieauxSociauxService.delete(id),
  },
};
