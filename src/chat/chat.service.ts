import { Injectable, Logger } from '@nestjs/common';
import { Replicate } from "langchain/llms/replicate";

process.env.REPLICATE_API_TOKEN = "r8_bNeseDXqFE9Lx3GS4h5hCAgA87naebv1SYOq5"

const model = new Replicate({
  model:
    "a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5",
});

@Injectable()
export class ChatService {

    private readonly logger = new Logger(ChatService.name);


    async ask(prompt: string) {
        this.logger.log('ASKING REPLICATE AI... prompt: ' + prompt);
        /*const promp = `
User: How much wood would a woodchuck chuck if a wood chuck could chuck wood?
Assistant:`;*/
        const res = await model.call(prompt);
        return {res};
    }
}
