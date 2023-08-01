import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { AlertGateway } from './alert.gateway';

@Controller('alert')
export class AlertController {
  constructor(private alerteGateway: AlertGateway) {}

  @Post()
  @HttpCode(200)
  sendAlertToAll(@Body() dto: { message: string }) {
    this.alerteGateway.sendToAll(dto.message);
    return dto;
  }
}
