import { Experience } from './experience.model.js';
import type { IExperience, IExperienceDocument } from './experience.model.js';

export class ExperienceService {
  static async getAll(): Promise<IExperienceDocument[]> {
    return Experience.find<IExperienceDocument>();
  }
  static async getByUserId(userId: string): Promise<IExperienceDocument[]> {
    return Experience.find<IExperienceDocument>({ userId });
  }
  static async getById(id: string): Promise<IExperienceDocument | null> {
    return Experience.findById<IExperienceDocument>(id);
  }
  static async create(data: IExperience): Promise<IExperienceDocument> {
    const exp = new Experience(data);
    return exp.save();
  }
  static async update(id: string, data: Partial<IExperience>): Promise<IExperienceDocument | null> {
    return Experience.findByIdAndUpdate<IExperienceDocument>(id, data, { new: true });
  }
  static async delete(id: string): Promise<IExperienceDocument | null> {
    return Experience.findByIdAndDelete<IExperienceDocument>(id);
  }
}
