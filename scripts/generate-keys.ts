import { generateEncryptionKeys } from '../src/lib/utils';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Script to generate encryption keys for NIK encryption
 * Run this script once to generate the initial keys
 *
 * Usage: npx ts-node scripts/generate-keys.ts
 */

function generateKeys() {
  // const keysDir = join(process.cwd(), 'src', 'keys');
  // // Create keys directory if it doesn't exist
  // if (!existsSync(keysDir)) {
  //   mkdirSync(keysDir, { recursive: true });
  //   console.log('✅ Created keys directory');
  // }
  // // Check if keys already exist
  // const publicKeyPath = join(keysDir, 'public.pem');
  // const privateKeyPath = join(keysDir, 'private.pem');
  // if (existsSync(publicKeyPath) && existsSync(privateKeyPath)) {
  //   console.log('⚠️  Encryption keys already exist. Delete them first if you want to regenerate.');
  //   return;
  // }
  // try {
  //   console.log('🔑 Generating encryption keys...');
  //   const { publicKey, privateKey } = generateEncryptionKeys();
  //   writeFileSync(publicKeyPath, publicKey);
  //   writeFileSync(privateKeyPath, privateKey);
  //   console.log('✅ Encryption keys generated successfully!');
  //   console.log(`📁 Public key: ${publicKeyPath}`);
  //   console.log(`📁 Private key: ${privateKeyPath}`);
  //   console.log('🔒 Keys are automatically ignored by git for security');
  // } catch (error) {
  //   console.error('❌ Failed to generate encryption keys:', error);
  //   process.exit(1);
  // }
}

// Run the key generation
generateKeys();
