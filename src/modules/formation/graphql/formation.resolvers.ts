import { FormationService } from '../formation.service';

export const formationResolvers = {
  Query: {
    formations: () => FormationService.getAll(),
    formation: (_: any, { id }: { id: string }) => FormationService.getById(id),
  },
  Mutation: {
    createFormation: (_: any, args: any) => FormationService.create(args),
    updateFormation: (_: any, { id, ...data }: any) => FormationService.update(id, data),
    deleteFormation: (_: any, { id }: { id: string }) => FormationService.delete(id),
  },
};
