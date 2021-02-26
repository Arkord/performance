import { Controller, Get } from '@nestjs/common';

@Controller('potencia')
export class PotenciaController {

    @Get()
    getAll() {
        this.calcularPotencia();
        return "ok";
    }

    calcularPotencia() {
        const jm = require('js-meter')

        const isPrint = true
        const isKb = true 

        const m = new jm({isPrint, isKb})

        for(var i=0; i<10000; i++){
            Math.random();
        }

        const meter = m.stop()
    }


}
