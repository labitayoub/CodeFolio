import { Skill } from './skill.model';

export class SkillService {
  static async getAll() {
    return Skill.find();
  }
  static async getById(id: string) {
    return Skill.findById(id);
  }
  static async create(data: any) {
    const skill = new Skill(data);
    return skill.save();
  }
  static async update(id: string, data: any) {
    return Skill.findByIdAndUpdate(id, data, { new: true });
  }
  static async delete(id: string) {
    return Skill.findByIdAndDelete(id);
  }
}
