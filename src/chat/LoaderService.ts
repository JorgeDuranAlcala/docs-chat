import { Document } from 'langchain/document'

export abstract class LoaderService {
    abstract load(path?: string): Promise<Document<Record<string, any>>[]>;
}