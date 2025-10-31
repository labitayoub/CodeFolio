import { DocumentModel } from './document.model.js';
export class DocumentService {
    static async getAll() {
        return DocumentModel.find();
    }
    static async getById(id) {
        return DocumentModel.findById(id);
    }
    static async create(data) {
        const doc = new DocumentModel(data);
        return doc.save();
    }
    static async update(id, data) {
        return DocumentModel.findByIdAndUpdate(id, data, { new: true });
    }
    static async delete(id) {
        return DocumentModel.findByIdAndDelete(id);
    }
}
//# sourceMappingURL=document.service.js.map