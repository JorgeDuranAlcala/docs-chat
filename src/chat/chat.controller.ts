import { Controller, Post, Body, Inject, Logger } from '@nestjs/common';
import { ChatService } from './chat.service';
import { JsonLoaderService } from './json-loader/json-loader.service';
import { LoaderService } from './LoaderService';
import { AskQuestionDto } from './dtos'

@Controller('chat')
export class ChatController {

    private readonly logger = new Logger(ChatController.name);

    constructor(
        private readonly loaderService: LoaderService,
        private readonly chatService: ChatService
    ) {}

    @Post('ask')
    public askQuestion(@Body() askBody: AskQuestionDto) {
        //const docs = this.loaderService.load('/path');
        return this.chatService.ask(askBody.question)
    }
}
