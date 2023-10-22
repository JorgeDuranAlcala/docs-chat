import { Controller, Get } from '@nestjs/common';
import { DocuService } from './docu.service';

@Controller('docu')
export class DocuController {

    constructor(private readonly docuService: DocuService) {}
     
    @Get('search')
    searchDocsInfo() {
        return this.docuService.getDocsData()
    }
}
