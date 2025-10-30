import { Experience } from './experience.model';

export class ExperienceService {
  static async getAll() {
    return Experience.find();
  }
  static async getById(id: string) {
    return Experience.findById(id);
  }
  static async create(data: any) {
    const exp = new Experience(data);
    return exp.save();
  }
  static async update(id: string, data: any) {
    return Experience.findByIdAndUpdate(id, data, { new: true });
  }
  static async delete(id: string) {
    return Experience.findByIdAndDelete(id);
  }
}
