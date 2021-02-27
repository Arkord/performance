import { Controller, Get } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {

    @Get()
    getAll() {
        let resultado: number;
        let numero: number = 18;

        const jm = require('js-meter')
        const isPrint = true
        const isKb = true 
        const m = new jm({isPrint, isKb})

        resultado = this.iterativo(numero);
        //resultado = this.recursivo(0, numero, 0, 1);

        m.stop();

        return resultado;
    }


    iterativo(numero: number): number {
        let anterior = 0;
        let siguiente = 1;
        let resultado = 0;

        if(numero > 1) {
            for(let i = 2; i < numero; i++) {
                resultado = anterior + siguiente;
                anterior = siguiente;
                siguiente = resultado;
            }
        }
        
        return resultado;
    }

    recursivo(resultado: number, numero: number, anterior: number, siguiente: number): number {
        resultado = anterior + siguiente;
        anterior = siguiente;
        siguiente = resultado;

        numero--;

        if(numero > 2) {
            resultado = this.recursivo(resultado, numero, anterior, siguiente);
        }
        return resultado;
    }

}
