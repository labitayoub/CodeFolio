import { Visitors } from './visitors.model';

export class VisitorsService {
  static async getAll() {
    return Visitors.find();
  }
  static async getById(id: string) {
    return Visitors.findById(id);
  }
  static async create(data: any) {
    const visitor = new Visitors(data);
    return visitor.save();
  }
  static async update(id: string, data: any) {
    return Visitors.findByIdAndUpdate(id, data, { new: true });
  }
  static async delete(id: string) {
    return Visitors.findByIdAndDelete(id);
  }
}
