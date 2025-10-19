import { Test, TestingModule } from '@nestjs/testing';
import { DisdukcapilController } from './disdukcapil.controller';

describe('DisdukcapilController', () => {
  let controller: DisdukcapilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisdukcapilController],
    }).compile();

    controller = module.get<DisdukcapilController>(DisdukcapilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
