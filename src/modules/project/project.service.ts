import { ProjectModel } from './project.model.js';
import type { IProject, IProjectDocument } from './project.model.js';

export class ProjectService {
  async getProjets(): Promise<IProjectDocument[]> {
    return await ProjectModel.find<IProjectDocument>().populate('skills');
  }

  async createProjet(args: IProject): Promise<IProjectDocument> {
    const newProject = new ProjectModel(args);
    return await newProject.save();
  }

  async updateProjet(id: string, args: Partial<IProject>): Promise<IProjectDocument | null> {
    return await ProjectModel.findByIdAndUpdate<IProjectDocument>(id, args, { new: true });
  }

  async deleteProjet(id: string): Promise<IProjectDocument | null> {
    return await ProjectModel.findByIdAndDelete<IProjectDocument>(id);
  }
}
