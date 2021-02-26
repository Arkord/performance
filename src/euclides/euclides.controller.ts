import { Controller, Get } from '@nestjs/common';

@Controller('euclides')
export class EuclidesController {

    @Get()
    getAll() {
        return 'Euclides'
    }

}
