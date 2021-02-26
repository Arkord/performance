import { Controller, Get } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {

    @Get()
    getAll() {
        return 'Fibonacci'
    }
}
