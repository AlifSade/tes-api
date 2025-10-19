import { Test, TestingModule } from '@nestjs/testing';
import { LevelPendidikanController } from './level-pendidikan.controller';

describe('LevelPendidikanController', () => {
  let controller: LevelPendidikanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelPendidikanController],
    }).compile();

    controller = module.get<LevelPendidikanController>(LevelPendidikanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
