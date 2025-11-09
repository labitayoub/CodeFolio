import { Formation } from './formation.model.js';
import type { IFormation, IFormationDocument } from './formation.model.js';

export class FormationService {
  static async getAll(): Promise<IFormationDocument[]> {
    return Formation.find<IFormationDocument>();
  }
  static async getByUserId(userId: string): Promise<IFormationDocument[]> {
    return Formation.find<IFormationDocument>({ userId });
  }
  static async getById(id: string): Promise<IFormationDocument | null> {
    return Formation.findById<IFormationDocument>(id);
  }
  static async create(data: IFormation): Promise<IFormationDocument> {
    const formation = new Formation(data);
    return formation.save();
  }
  static async update(id: string, data: Partial<IFormation>): Promise<IFormationDocument | null> {
    return Formation.findByIdAndUpdate<IFormationDocument>(id, data, { new: true });
  }
  static async delete(id: string): Promise<IFormationDocument | null> {
    return Formation.findByIdAndDelete<IFormationDocument>(id);
  }
}
