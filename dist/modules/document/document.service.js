import { Document } from './document.model';
export class DocumentService {
    static async getAll() {
        return Document.find();
    }
    static async getById(id) {
        return Document.findById(id);
    }
    static async create(data) {
        const doc = new Document(data);
        return doc.save();
    }
    static async update(id, data) {
        return Document.findByIdAndUpdate(id, data, { new: true });
    }
    static async delete(id) {
        return Document.findByIdAndDelete(id);
    }
}
//# sourceMappingURL=document.service.js.map