import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciController } from './fibonacci/fibonacci.controller';
import { EuclidesController } from './euclides/euclides.controller';
import { ArbolesController } from './arboles/arboles.controller';
import { ArbolesBController } from './arboles-b/arboles-b.controller';
import { OrdenamientoController } from './ordenamiento/ordenamiento.controller';

@Module({
  imports: [
    
  ],
  controllers: [AppController, FibonacciController, EuclidesController, ArbolesController, ArbolesBController, OrdenamientoController],
  providers: [AppService],
})
export class AppModule {}
