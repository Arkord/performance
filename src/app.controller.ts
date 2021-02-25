import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    process.stdout.write("\u001b[2J\u001b[0;0H");
    const jm = require('js-meter')

    const isPrint = true
    const isKb = true 

    const m = new jm({isPrint, isKb})

    for(var i=0; i<1000000000; i++){
        Math.random()
    }

    const meter = m.stop()
    return this.appService.getHello();
  }
}
