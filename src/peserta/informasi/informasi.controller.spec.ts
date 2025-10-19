import { Test, TestingModule } from '@nestjs/testing';
import { InformasiController } from './informasi.controller';

describe('InformasiController', () => {
  let controller: InformasiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformasiController],
    }).compile();

    controller = module.get<InformasiController>(InformasiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
