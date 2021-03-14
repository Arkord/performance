import { Controller, Get, Param } from '@nestjs/common';
import { BinarySearchTree, AvlTree } from '@datastructures-js/binary-search-tree'

@Controller('ordenamiento')
export class OrdenamientoController {
    n: number = 10;
    poblacion: number[] = this.obtenerPoblacion(this.n);
    public Kalgortimo: string;

    @Get(":algoritmo")
    getAll(@Param() params) {
        this.algortimo = params.algoritmo;
        let resultado;

        const jm = require('js-meter');
        const isPrint = true;
        const isKb = true;
        const m = new jm({isPrint, isKb});
        const benchmark = require('nodemark');


        m.stop();
        resultado = benchmark(this.ordenar);
        // console.log('Spend time : ', resultado.nanoseconds() / 1000000, "MS");
        // console.log(this.algortimo);

        // return this.algortimo;
    }

    ordenar() {
        let sort = require('sort-algorithms');
        this.algortimo;
        // switch(this.algortimo) {
        //     case "burbuja":
        //         console.log(sort.bubbleSort(this.poblacion));
        //     break;
        //     case "burbujaBidireccional":
        //         console.log(sort.shellSort(this.poblacion));
        //     break;
        //     case "insercion":
        //         console.log(sort.insertionSort(this.poblacion));
        //     break;
        //     case "casilleros":
        //         console.log(sort.bucketSort(this.poblacion));
        //     break;
        //     case "cuentas":
        //         console.log(sort.countingSort(this.poblacion));
        //     break;
        //     case "mezcla":
        //         console.log(sort.mergeSort(this.poblacion));
        //     break;
        //     case "arbolBinario":
        //         console.log(sort.quickSort(this.poblacion));
        //     break;
        //     case "radix":
        //         console.log(sort.radixSortLSD(this.poblacion));
        //     break;
        // }
    }

    obtenerPoblacion(n: number) : number[] {
        let poblacion: number[] = [];

        for(let i = 0; i < n; i++) {
            poblacion.push(this.obtenerNumero(0, 9));
        }

        return poblacion;
    }

    obtenerNumero(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
} 
