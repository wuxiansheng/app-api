import { Test, TestingModule } from '@nestjs/testing';
import { MemberController } from './member.controller';

describe('Member Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MemberController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MemberController = module.get<MemberController>(MemberController);
    expect(controller).toBeDefined();
  });
});
