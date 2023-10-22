import { Injectable } from '@nestjs/common';
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { Document } from "langchain/document";
import { LoaderService } from '../LoaderService'


@Injectable()
export class JsonLoaderService implements LoaderService {
    

    async load(path?: string): Promise<Document<Record<string, any>>[]> {
        const loader = new JSONLoader(path || "");
        const docs = await loader.load();
        return docs
    }
}
