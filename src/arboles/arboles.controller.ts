import { Controller, Get, Param } from '@nestjs/common';
import { BinarySearchTree, AvlTree } from '@datastructures-js/binary-search-tree'
//const bst = new AvlTree();
let avl = new AvlTree();

@Controller('arboles')
export class ArbolesController {


    @Get(":option")
    avlAnalisis(@Param() params) {
        const option = parseInt(params.option);
        let result;
        
        setAvl();

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
                search;
                m.stop();
                result = benchmark(orderAsc);
            break;
            case 5:
                search;
                m.stop();
                result = benchmark(orderDec);
            break;
            case 6:
                search;
                m.stop();
                result = benchmark(height);
            break;
            case 7:
                search;
                m.stop();
                result = benchmark(deep);
            break;
            case 8:
                search;
                m.stop();
                result = benchmark(level);
            break;
        }
        console.log('Spend time : ', result.nanoseconds() / 1000000, "MS");
        console.log(avl);

        return "Get Arboles " + params.option;
    }
}

function setAvl() {
    for(let i: number = 0; i < 1000; i++) {
        let key = i + 1;
        let value = key * 100;
        avl.insert(key,  value);
    }
}

function insert() {
    avl.insert(11,  100);
}

function remove() {
    avl.remove(1);
}

function search() {
    avl.find(333);
}

function orderAsc() {
    avl.traverseInOrder((node) => console.log(node.getKey()));
}

function orderDec() {
    avl.traversePreOrder((node) => console.log(node.getKey()));
}

function height() {
    avl.getHeight();
}

function deep() {
    avl.getLeftHeight();
}

function level() {
    avl.getRightHeight();
}