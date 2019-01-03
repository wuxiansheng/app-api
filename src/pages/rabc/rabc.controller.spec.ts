import { Test, TestingModule } from '@nestjs/testing';
import { RabcController } from './rabc.controller';

describe('Rabc Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [RabcController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: RabcController = module.get<RabcController>(RabcController);
    expect(controller).toBeDefined();
  });
});
