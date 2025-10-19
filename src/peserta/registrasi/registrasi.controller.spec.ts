import { Test, TestingModule } from '@nestjs/testing';
import { RegistrasiController } from './registrasi.controller';

describe('RegistrasiController', () => {
  let controller: RegistrasiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrasiController],
    }).compile();

    controller = module.get<RegistrasiController>(RegistrasiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
