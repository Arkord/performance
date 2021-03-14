import { Test, TestingModule } from '@nestjs/testing';
import { OrdenamientoController } from './ordenamiento.controller';

describe('OrdenamientoController', () => {
  let controller: OrdenamientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenamientoController],
    }).compile();

    controller = module.get<OrdenamientoController>(OrdenamientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
