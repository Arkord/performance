import { Test, TestingModule } from '@nestjs/testing';
import { ArbolesBController } from './arboles-b.controller';

describe('ArbolesBController', () => {
  let controller: ArbolesBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArbolesBController],
    }).compile();

    controller = module.get<ArbolesBController>(ArbolesBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
