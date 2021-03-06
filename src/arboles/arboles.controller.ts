import { Controller, Get, Param } from '@nestjs/common';
import {  AvlTree } from 'datastructures-js';

@Controller('arboles')
export class ArbolesController {
    @Get(":option")
    show(@Param() params) {
        const bst = new AvlTree();
        bst.insert(1,  100);
        bst.insert(2,  200);
        bst.insert(3,  300);
        console.log(bst);

        return "Get Arboles " + params.option;
    }
}
