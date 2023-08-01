import { Logger } from '@nestjs/common';
import {
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway implements OnGatewayInit {
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger('ChatGateway');

  afterInit(server: Server): void {
    this.logger.log('Initialized');
  }
  @SubscribeMessage('chatToServer')
  handleMessage(
    client: Socket,
    message: { sender: string; message: string },
  ): void {
    this.wss.emit('chatToClient', message);
  }
}
