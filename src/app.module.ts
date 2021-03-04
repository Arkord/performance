import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciController } from './fibonacci/fibonacci.controller';
import { EuclidesController } from './euclides/euclides.controller';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsuariosModule
  ],
  controllers: [AppController, FibonacciController, EuclidesController],
  providers: [AppService],
})
export class AppModule {}
