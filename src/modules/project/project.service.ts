import { ProjectModel } from './project.model.js';
import type { IProject, IProjectDocument } from './project.model.js';

export class ProjectService {
  static async getAll(): Promise<IProjectDocument[]> {
    try {
      return await ProjectModel.find<IProjectDocument>();
    } catch (error) {
      throw new Error('Failed to fetch projects');
    }
  }

  static async getById(id: string): Promise<IProjectDocument | null> {
    try {
      return await ProjectModel.findById<IProjectDocument>(id);
    } catch (error) {
      throw new Error('Failed to fetch project');
    }
  }

  static async create(data: IProject): Promise<IProjectDocument> {
    try {
      const newProject = new ProjectModel(data);
      return await newProject.save();
    } catch (error) {
      throw new Error('Failed to create project');
    }
  }

  static async update(id: string, data: Partial<IProject>): Promise<IProjectDocument | null> {
    try {
      return await ProjectModel.findByIdAndUpdate<IProjectDocument>(id, data, { new: true });
    } catch (error) {
      throw new Error('Failed to update project');
    }
  }

  static async delete(id: string): Promise<IProjectDocument | null> {
    try {
      return await ProjectModel.findByIdAndDelete<IProjectDocument>(id);
    } catch (error) {
      throw new Error('Failed to delete project');
    }
  }
}
