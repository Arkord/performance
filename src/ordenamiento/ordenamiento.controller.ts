import { Controller, Get, Param } from '@nestjs/common';

@Controller('ordenamiento')
export class OrdenamientoController {
    n: number = 5000;
    poblacion: number[];
    algoritmo: string;

    @Get(":algoritmo")
    getAll(@Param() params) {
        this.poblacion = this.obtenerPoblacion(this.n);
        this.algoritmo = params.algoritmo;
        let resultado;

        const perf = require('execution-time')();

        //at beginning of your code
        perf.start();

        this.ordenar();

        const results = perf.stop();
        //at end of your code
        console.log(results.time);
        

        return this.algoritmo;
    }

    ordenar = () => {
        let sort = require('sort-algorithms');
        
        switch(this.algoritmo) {
            case "burbuja":
               sort.bubbleSort(this.poblacion);
            break;
            case "burbujaBidireccional":
                sort.shellSort(this.poblacion);
            break;
            case "insercion":
                sort.insertionSort(this.poblacion);
            break;
            case "casilleros":
                sort.bucketSort(this.poblacion);
            break;
            case "cuentas":
                sort.countingSort(this.poblacion);
            break;
            case "mezcla":
                sort.mergeSort(this.poblacion);
            break;
            case "radix":
                sort.radixSortLSD(this.poblacion);
            break;
            case "shell":
                sort.shellSort(this.poblacion);
            break;
            case "seleccion":
                sort.selectionSort(this.poblacion);
            break;
            case "monticulos":
                sort.heapSort(this.poblacion);
            break;
            case "rapido":
                sort.quickSort(this.poblacion);
            break;
        }
    }

    obtenerPoblacion(n: number) : number[] {
        let poblacion: number[] = [];
        for (let i = 0; i < n; i++) {
            let numero = 8;//Math.floor(Math.random() * (9 - 0)) + 0;
            poblacion.push(numero);
        }

        return poblacion;
    }

}
