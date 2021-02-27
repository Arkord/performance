import { Controller, Get } from '@nestjs/common';

@Controller('potencia')
export class PotenciaController {

    @Get()
    getAll() {
        let resultado: number;
        let numero: number = 10;
        let n: number = 8250;

        const jm = require('js-meter')
        const isPrint = true
        const isKb = true 
        const m = new jm({isPrint, isKb})

        resultado = this.recursivo(numero, numero, n);
        
        m.stop();

        return resultado;
    }


    iterativo(resultado: number, numero: number, potencia: number): number {
        for(let i = 1; i < potencia; i++) {
            resultado *= numero;
        }
        return resultado;
    }

    recursivo(resultado: number, numero: number, potencia: number): number {
        resultado = resultado * numero;
        potencia--;

        if(potencia > 1) {
            resultado = this.recursivo(resultado, numero, potencia);
        }
        return resultado;
    }

}
