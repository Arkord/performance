import { Controller, Get } from '@nestjs/common';

@Controller('euclides')
export class EuclidesController {

    @Get()
    getAll() {
        let resultado: number;
        let numero1: number = 40;
        let numero2: number = 21;

        const jm = require('js-meter')
        const isPrint = true
        const isKb = true 
        const m = new jm({isPrint, isKb})

        resultado = this.iterativo(numero1, numero2);
        //resultado = this.recursivo(numero1, numero2);

        m.stop();

        return resultado;
    }


    iterativo(numero1: number, numero2: number): number {
        let residuo = numero1 % numero2;
        let mcd = numero2;

        while(residuo > 0) {
            numero1 = numero2;
            numero2 = residuo;

            mcd = residuo;
            residuo = numero1 % numero2;
        }
        
        return mcd;
    }

    recursivo(numero1: number, numero2: number): number {
        let residuo = numero1 % numero2;
        let mcd = residuo;
        let res = 0;
        
        if(residuo > 0) {
            res = this.recursivo(numero2, residuo);
            if(res > 0) {
                mcd = res;
            }
        }

        return mcd;

    }

}
