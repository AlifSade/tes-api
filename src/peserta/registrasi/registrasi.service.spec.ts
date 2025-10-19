import { Test, TestingModule } from '@nestjs/testing';
import { RegistrasiService } from './registrasi.service';

describe('RegistrasiService', () => {
  let service: RegistrasiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrasiService],
    }).compile();

    service = module.get<RegistrasiService>(RegistrasiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
