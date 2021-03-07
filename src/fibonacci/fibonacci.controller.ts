import { Controller, Get } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {

    @Get()
    getAll() {
        let resultado: number;
        let numero: number = 1800000;

        const jm = require('js-meter')
        const isPrint = true
        const isKb = true 
        const m = new jm({isPrint, isKb})

        resultado = this.iterativo(numero);
        //resultado = this.recursivo(0, numero, 0, 1);

        m.stop();
        

        function mini() {
            let anterior = 0;
            let siguiente = 1;
            let resultado = 0;
    
            if(numero > 1) {
                for(let i = 2; i < 1800000; i++) {
                    resultado = anterior + siguiente;
                    anterior = siguiente;
                    siguiente = resultado;
                }
            }
        }

        const benchmark = require('nodemark');
        const result = benchmark(mini);
        console.log(result); // => 14,114,886 ops/sec ±0.58% (7906233 samples)
        console.log(result.microseconds() / 1000); // => 71
        console.log('Spend time : ', result.microseconds() / 1000);
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
