import { ResieauxSociaux } from './resieauxSociaux.model';

export class ResieauxSociauxService {
  static async getAll() {
    return ResieauxSociaux.find();
  }
  static async getById(id: string) {
    return ResieauxSociaux.findById(id);
  }
  static async create(data: any) {
    const rs = new ResieauxSociaux(data);
    return rs.save();
  }
  static async update(id: string, data: any) {
    return ResieauxSociaux.findByIdAndUpdate(id, data, { new: true });
  }
  static async delete(id: string) {
    return ResieauxSociaux.findByIdAndDelete(id);
  }
}
