import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { ChatGateway } from './chat/chat/chat.gateway';


@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway, ChatGateway],
})
export class AppModule {}
