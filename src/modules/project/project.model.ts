
import { Document, Schema, model, Types } from 'mongoose';

export interface IProject {
  titre: string;
  description: string;
  urlGit: string;
  urlDemo: string;
  image: string;
  userId: Types.ObjectId;
}

export type IProjectDocument = IProject & Document;

const projectSchema = new Schema<IProjectDocument>({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  urlGit: { type: String, required: true },
  urlDemo: { type: String, required: true },
  image: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const ProjectModel = model<IProjectDocument>('Project', projectSchema);
