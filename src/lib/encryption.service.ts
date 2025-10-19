import { Injectable, Logger } from '@nestjs/common';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { generateEncryptionKeys, encryptNIK, decryptNIK } from './utils';

@Injectable()
export class EncryptionService {
  private readonly logger = new Logger(EncryptionService.name);
  private publicKeyPath: string;
  private privateKeyPath: string;

  constructor() {
    // Set key file paths
    this.publicKeyPath = join(process.cwd(), 'src', 'keys', 'public.pem');
    this.privateKeyPath = join(process.cwd(), 'src', 'keys', 'private.pem');
    
    // Ensure keys directory exists and keys are generated
    this.ensureKeysExist();
  }

  private ensureKeysExist(): void {
    const keysDir = join(process.cwd(), 'src', 'keys');
    
    // Create keys directory if it doesn't exist
    if (!existsSync(keysDir)) {
      try {
        const fs = require('fs');
        fs.mkdirSync(keysDir, { recursive: true });
        this.logger.log('Created keys directory');
      } catch (error) {
        this.logger.error('Failed to create keys directory:', error);
        throw new Error('Failed to create keys directory');
      }
    }

    // Generate keys if they don't exist
    if (!existsSync(this.publicKeyPath) || !existsSync(this.privateKeyPath)) {
      this.generateAndSaveKeys();
    }
  }

  private generateAndSaveKeys(): void {
    try {
      this.logger.log('Generating new encryption keys...');
      const { publicKey, privateKey } = generateEncryptionKeys();
      
      writeFileSync(this.publicKeyPath, publicKey);
      writeFileSync(this.privateKeyPath, privateKey);
      
      this.logger.log('Encryption keys generated and saved successfully');
    } catch (error) {
      this.logger.error('Failed to generate encryption keys:', error);
      throw new Error('Failed to generate encryption keys');
    }
  }

  private getPublicKey(): string {
    try {
      return readFileSync(this.publicKeyPath, 'utf8');
    } catch (error) {
      this.logger.error('Failed to read public key:', error);
      throw new Error('Failed to read public key');
    }
  }

  private getPrivateKey(): string {
    try {
      return readFileSync(this.privateKeyPath, 'utf8');
    } catch (error) {
      this.logger.error('Failed to read private key:', error);
      throw new Error('Failed to read private key');
    }
  }

  public encryptNIKData(nik: string): string {
    try {
      const publicKey = this.getPublicKey();
      const encryptedNik = encryptNIK(nik, publicKey);
      this.logger.log('NIK encrypted successfully');
      return encryptedNik;
    } catch (error) {
      this.logger.error('Failed to encrypt NIK:', error);
      throw new Error('Failed to encrypt NIK');
    }
  }

  public decryptNIKData(encryptedNik: string): string {
    try {
      const privateKey = this.getPrivateKey();
      const decryptedNik = decryptNIK(encryptedNik, privateKey);
      this.logger.log('NIK decrypted successfully');
      return decryptedNik;
    } catch (error) {
      this.logger.error('Failed to decrypt NIK:', error);
      throw new Error('Failed to decrypt NIK');
    }
  }

  public getPublicKeyForExport(): string {
    return this.getPublicKey();
  }
}
