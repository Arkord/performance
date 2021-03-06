import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciController } from './fibonacci/fibonacci.controller';
import { EuclidesController } from './euclides/euclides.controller';
import { ArbolesController } from './arboles/arboles.controller';

@Module({
  imports: [
    
  ],
  controllers: [AppController, FibonacciController, EuclidesController, ArbolesController],
  providers: [AppService],
})
export class AppModule {}
