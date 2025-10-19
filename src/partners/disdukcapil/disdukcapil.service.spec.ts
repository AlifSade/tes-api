import { Test, TestingModule } from '@nestjs/testing';
import { DisdukcapilService } from './disdukcapil.service';

describe('DisdukcapilService', () => {
  let service: DisdukcapilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisdukcapilService],
    }).compile();

    service = module.get<DisdukcapilService>(DisdukcapilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
