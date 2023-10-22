import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { JsonLoaderService } from './json-loader/json-loader.service';
import { LoaderService } from './LoaderService';

@Module({
  providers: [ChatService, { provide: LoaderService, useClass: JsonLoaderService }],
  controllers: [ChatController]
})
export class ChatModule {}
