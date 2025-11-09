import { ReseauxSociaux } from './resieauxSociaux.model.js';
import type { IReseauxSociaux, IReseauxSociauxDocument } from './resieauxSociaux.model.js';

export class ResieauxSociauxService {
  static async getAll(): Promise<IReseauxSociauxDocument[]> {
    return ReseauxSociaux.find();
  }
  static async getByUserId(userId: string): Promise<IReseauxSociauxDocument[]> {
    return ReseauxSociaux.find({ userId });
  }
  static async getById(id: string): Promise<IReseauxSociauxDocument | null> {
    return ReseauxSociaux.findById(id);
  }
  static async create(data: Partial<IReseauxSociaux>): Promise<IReseauxSociauxDocument> {
    const rs = new ReseauxSociaux(data);
    return rs.save();
  }
  static async update(id: string, data: Partial<IReseauxSociaux>): Promise<IReseauxSociauxDocument | null> {
    return ReseauxSociaux.findByIdAndUpdate(id, data, { new: true });
  }
  static async delete(id: string): Promise<IReseauxSociauxDocument | null> {
    return ReseauxSociaux.findByIdAndDelete(id);
  }
}
