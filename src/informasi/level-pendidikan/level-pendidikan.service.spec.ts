import { Test, TestingModule } from '@nestjs/testing';
import { LevelPendidikanService } from './level-pendidikan.service';

describe('LevelPendidikanService', () => {
  let service: LevelPendidikanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LevelPendidikanService],
    }).compile();

    service = module.get<LevelPendidikanService>(LevelPendidikanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
