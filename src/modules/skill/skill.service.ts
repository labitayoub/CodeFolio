import { Skill } from './skill.model.js';
import type { ISkill, ISkillDocument } from './skill.model.js';

export class SkillService {
  static async getAll(): Promise<ISkillDocument[]> {
    return Skill.find<ISkillDocument>();
  }
  static async getByUserId(userId: string): Promise<ISkillDocument[]> {
    return Skill.find<ISkillDocument>({ userId });
  }
  static async getById(id: string): Promise<ISkillDocument | null> {
    return Skill.findById<ISkillDocument>(id);
  }
  static async create(data: ISkill): Promise<ISkillDocument> {
    const skill = new Skill(data);
    return skill.save();
  }
  static async update(id: string, data: Partial<ISkill>): Promise<ISkillDocument | null> {
    return Skill.findByIdAndUpdate<ISkillDocument>(id, data, { new: true });
  }
  static async delete(id: string): Promise<ISkillDocument | null> {
    return Skill.findByIdAndDelete<ISkillDocument>(id);
  }
}
