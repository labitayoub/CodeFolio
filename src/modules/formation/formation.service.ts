import { Formation } from './formation.model';

export class FormationService {
  static async getAll() {
    return Formation.find();
  }
  static async getById(id: string) {
    return Formation.findById(id);
  }
  static async create(data: any) {
    const formation = new Formation(data);
    return formation.save();
  }
  static async update(id: string, data: any) {
    return Formation.findByIdAndUpdate(id, data, { new: true });
  }
  static async delete(id: string) {
    return Formation.findByIdAndDelete(id);
  }
}
