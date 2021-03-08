import { Controller, Get, Param } from '@nestjs/common';
import { BinarySearchTree } from '@datastructures-js/binary-search-tree'

let bst = new BinarySearchTree();

@Controller('arbolesB')
export class ArbolesBController {


    @Get(":option")
    bstAnalisis(@Param() params) {
        const option = parseInt(params.option);
        let result;
        
        setBST();

        const jm = require('js-meter');
        const isPrint = true;
        const isKb = true;
        const m = new jm({isPrint, isKb});
        const benchmark = require('nodemark');

        switch(option) {
            case 1:
                insert;
                m.stop();
                result = benchmark(insert);
            break;
            case 2:
                remove;
                m.stop();
                result = benchmark(remove);
            break;
            case 3:
                search;
                m.stop();
                result = benchmark(search);
            break;
            case 4:
                orderAsc;
                m.stop();
                result = benchmark(orderAsc);
            break;
            case 5:
                orderDec;
                m.stop();
                result = benchmark(orderDec);
            break;
            case 6:
                VerificarB;
                m.stop();
                result = benchmark(VerificarB);
            break;
        }
        console.log('Spend time : ', result.nanoseconds() / 1000000, "MS");
        

        return "Get Arboles " + params.option;
    }
}

function setBST() {
    for(let i: number = 0; i < 10000; i++) {
        let key = i + 1;
        let value = key * 100;
        bst.insert(key,  value);
    }
}

function insert() {
    bst.insert(11,  100);
}

function remove() {
    bst.remove(1);
}

function search() {
    bst.find(5000);
}

function orderAsc() {
    bst.traverseInOrder((node) => node.getKey());
}

function orderDec() {
    bst.traversePreOrder((node) => node.getKey());
}

function VerificarB() {
    bst.traversePostOrder((node) => node.getKey());
}