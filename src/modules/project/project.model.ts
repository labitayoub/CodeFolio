
import { Document, Schema, model, Types } from 'mongoose';

export interface IProject {
  title: string;
  description: string;
  skills: Types.ObjectId[];
}

export type IProjectDocument = IProject & Document;

const projectSchema = new Schema<IProjectDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill', required: true }]
});

export const ProjectModel = model<IProjectDocument>('Project', projectSchema);
