import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PotenciaController } from './potencia/potencia.controller';
import { FibonacciController } from './fibonacci/fibonacci.controller';
import { EuclidesController } from './euclides/euclides.controller';

@Module({
  imports: [],
  controllers: [AppController, PotenciaController, FibonacciController, EuclidesController],
  providers: [AppService],
})
export class AppModule {}
