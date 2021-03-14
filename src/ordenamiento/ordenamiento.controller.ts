import { Controller, Get, Param } from '@nestjs/common';

@Controller('ordenamiento')
export class OrdenamientoController {

    @Get(":algoritmo")
    ordenar(@Param() params) {
        const algoritmo = params.algoritmo;
        const n = 10;

        let poblacion: number[] = this.obtenerPoblacion(n)

    }

    obtenerPoblacion(n: number) : number[] {
        let poblacion: number[];

        for(let i = 0; i < n; i++) {
            poblacion.push(this.obtenerNumero(0, 9));
        }

        return poblacion;
    }

    obtenerNumero(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
} 
