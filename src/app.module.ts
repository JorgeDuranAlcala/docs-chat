import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocuModule } from './docu/docu.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    DocuModule, 
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
