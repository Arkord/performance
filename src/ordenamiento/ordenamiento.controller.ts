import { Controller, Get, Param } from '@nestjs/common';

@Controller('ordenamiento')
export class OrdenamientoController {
    n: number = 0;
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
            case "expres":
                var _ = require("underscore");
                var ejercicio1 = {
                    conformarConjuntos(cadena) {
                        var expresionfinal;
                
                        while (cadena.indexOf('(') > -1 && cadena.indexOf(')') > -1) {
                            var seccion = this.extraerSeccion(cadena);
                            seccion.evaluada = this.evaluarSeccion(seccion.tokens).cadena;
                            cadena = this.actualizarCadena(cadena, seccion.evaluada, seccion.inicio, seccion.final);
                
                        }
                
                        var tokens = this.obtenerTokens(cadena);
                        var arreglo = _.without(this.evaluarSeccion(tokens).array, "+", "*");
                
                        var arregloOrdenado = _.sortBy(arreglo, function(num) {
                            return parseInt(num);
                        });
                
                        expresionfinal = "{" + arregloOrdenado.join(',') + "}";
                
                        console.log(cadena);
                        console.log("Expresión Final:", expresionfinal);
                
                        return expresionfinal;
                    },
                    evaluarSeccion(conjuntos) {
                        let tipo: any = {};
                        var resultado;
                        var lon = conjuntos.length;
                        var actual;
                
                        if (lon > 1) {
                            for (var i = 0; i < lon; i++) {
                                actual = conjuntos[i]
                                if (actual == "*" || actual == "+") {
                                    var siguiente = conjuntos[i + 1];
                
                                    if (typeof(siguiente) != "undefined" && siguiente != "+" && siguiente != "*") {
                                        resultado = this.aplicarOperacion(resultado, siguiente.split(','), actual);
                                        i++;
                                    }
                
                                } else {
                                    resultado = actual.split(',');
                                }
                            }
                        } else {
                            if (conjuntos.length == 1) {
                                resultado = conjuntos[0].split(',');
                            } else {
                                resultado = [""];
                            }
                        }
                
                        tipo.array = resultado;
                        tipo.cadena = "{" + resultado.join() + "}";
                
                        return tipo;
                    },
                    aplicarOperacion(conjunto1, conjunto2, operacion) {
                        var resultado;
                        if (operacion == "*") {
                            resultado = _.intersection(conjunto1, conjunto2);
                        } else if (operacion == "+") {
                            resultado = _.union(conjunto1, conjunto2);
                        }
                        return resultado;
                    },
                    extraerSeccion(cadena) {
                        let seccion:any = {};
                
                        var ultimo = cadena.indexOf(')');
                        var actual = ultimo;
                
                        do {
                            actual--;
                        } while (cadena[actual] != '(');
                
                        seccion.tokens = this.obtenerTokens(cadena.substring(actual + 1, ultimo));
                        seccion.inicio = actual;
                        seccion.final = ultimo;
                
                        console.log(seccion);
                
                        return seccion;
                    },
                    obtenerTokens(cadena) {
                        var tokens = cadena.split(/[{}]+/).filter(
                            function(e) {
                                return e;
                            }
                        );
                
                        return tokens;
                    },
                    actualizarCadena(cadenaOriginal, insertar, inicio, fin) {
                        var resultado;
                
                        var izquierda = cadenaOriginal.substring(0, inicio);
                        var derecha = cadenaOriginal.substring(fin + 1, cadenaOriginal.length);
                
                        resultado = izquierda + insertar + derecha;
                
                        return resultado;
                    },
                    validarExpresion(cadena) {
                        let validacion: any = {}
                        if (cadena.length > 250) {
                            validacion.pase = false;
                            validacion.mensaje = "La expresión no puede ser mayor de 250 caracteres";
                        } else if (cadena.split("(").length - 1 != cadena.split(")").length - 1) {
                            validacion.pase = false;
                            validacion.mensaje = "Expresión no válida, los paréntesis no coinciden";
                        } else if (cadena.split("{").length - 1 != cadena.split("}").length - 1) {
                            validacion.pase = false;
                            validacion.mensaje = "Expresión no válida, las llaves no coinciden";
                        } else {
                            validacion.pase = true;
                            validacion.mensaje = "ok";
                        }
                
                        return validacion;
                    }
                }
                var entrada = "({1}+{2})+({3})+((((((((((((((((((((((((({6}+{7})))))))))))))))))))))))))+{4}+{5}";
                var salida = ejercicio1.conformarConjuntos(entrada);
                console.log("Entrada: " + entrada);
                console.log("Salida: " + salida);
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
