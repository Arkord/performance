import { Controller, Get } from '@nestjs/common';

@Controller('potencia')
export class PotenciaController {

    @Get()
    getAll() {
        let resultado: number;
        resultado = this.iterativo(10, 10000000);
        
        return resultado;
    }


    iterativo(numero: number, potencia: number): number {
        const jm = require('js-meter')
        const isPrint = true
        const isKb = true 
        const m = new jm({isPrint, isKb})

        let resultado: number = numero;

        for(let i = 1; i < potencia; i++) {
            resultado *= numero;
        }

        m.stop();

        return resultado;
    }


}
