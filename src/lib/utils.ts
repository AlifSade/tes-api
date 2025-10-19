import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import PdfPrinter from 'pdfmake';
import { logoApp } from './base64';
import { startOfDay, endOfDay } from 'date-fns';
import { Buffer } from 'buffer'; // Make sure this import exists
import * as ExcelJS from 'exceljs';
import * as path from 'path';
import { CustomMessages } from 'src/utilities/custom-messages';
import { HttpException, HttpStatus } from '@nestjs/common';

type ISgnature = {
  secret: string;
  private_key: string;
  public_key: string;
};

export function generateDigitalSignature(data: string): ISgnature {
  const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(data);
  sign.end();

  const signature = sign.sign(privateKey, 'base64');

  return {
    secret: signature,
    private_key: privateKey,
    public_key: publicKey,
  };
}

export async function hashPassword(plainPassword: string) {
  const saltRounds = 10; // You can adjust this (higher = more secure but slower)
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

export function isEmpty(value: any): boolean {
  return (
    value === undefined ||
    value === null ||
    value === false ||
    value === 0 ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' &&
      !Array.isArray(value) &&
      Object.keys(value).length === 0)
  );
}

export function stringToFloat(value: string) {
  return parseFloat(String(value).replace(/,/g, ''));
}

export function newDateTime() {
  // format to Y-m-d H:i:s
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

export function generateOTP(n: number, chunks = 0, separator = ' ') {
  const add = 1;
  const maxSafe = 12 - add;

  let out: string;

  if (n > maxSafe) {
    out = generateOTP(maxSafe) + generateOTP(n - maxSafe);
  } else {
    const max = Math.pow(10, n + add);
    const min = Math.pow(10, n + add - 1);
    const number = Math.floor(Math.random() * (max - min)) + min;

    out = String(number).substring(add);
  }

  // Prevent leading zero
  if (out[0] === '0') {
    // Regenerate OTP if first digit is zero
    return generateOTP(n, chunks, separator);
  }

  if (chunks > 0 && n > chunks) {
    const formatted = [];
    for (let i = 0; i < out.length; i++) {
      if (i > 0 && i % chunks === 0) formatted.push(separator);
      formatted.push(out[i]);
    }
    return formatted.join('');
  }

  return out;
}

/**
 * Generate a strong random password with mixed characters
 * @param length - Length of the password (default: 12)
 * @param options - Password generation options
 */
export function generateStrongPassword(
  length: number = 12,
  options: {
    includeUppercase?: boolean;
    includeLowercase?: boolean;
    includeNumbers?: boolean;
    includeSymbols?: boolean;
    excludeSimilar?: boolean; // Exclude similar characters like 0, O, l, 1
  } = {}
): string {
  const {
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = true,
    excludeSimilar = true,
  } = options;

  // Character sets
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  // Exclude similar characters if requested
  if (excludeSimilar) {
    uppercase = uppercase.replace(/[O]/g, '');
    lowercase = lowercase.replace(/[l]/g, '');
    numbers = numbers.replace(/[0O1l]/g, '');
    symbols = symbols.replace(/[|]/g, '');
  }

  // Build character pool
  let charPool = '';
  if (includeUppercase) charPool += uppercase;
  if (includeLowercase) charPool += lowercase;
  if (includeNumbers) charPool += numbers;
  if (includeSymbols) charPool += symbols;

  if (charPool.length === 0) {
    throw new Error('At least one character type must be enabled');
  }

  // Ensure minimum length
  const minLength = Math.max(length, 8);
  if (minLength < 8) {
    throw new Error('Password length must be at least 8 characters');
  }

  // Generate password
  let password = '';
  const poolLength = charPool.length;

  // Ensure at least one character from each enabled type
  if (includeUppercase && uppercase.length > 0) {
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
  }
  if (includeLowercase && lowercase.length > 0) {
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
  }
  if (includeNumbers && numbers.length > 0) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (includeSymbols && symbols.length > 0) {
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  // Fill the rest randomly
  for (let i = password.length; i < minLength; i++) {
    password += charPool[Math.floor(Math.random() * poolLength)];
  }

  // Shuffle the password to avoid predictable patterns
  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}

/**
 * Generate a user-friendly strong password
 * Optimized for readability while maintaining security
 */
export function generateUserFriendlyPassword(length: number = 12): string {
  return generateStrongPassword(length, {
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: true, // Exclude confusing characters
  });
}

export function getExpiryTime(minutes: number): Date {
  const now = new Date();
  const minutesLater = new Date(now.getTime() + minutes * 60 * 1000);
  return minutesLater;
}

export function generateTabunganNumber(nasbah_id: bigint): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // JS months: 0-indexed
  const day = String(now.getDate()).padStart(2, '0');

  const datePart = `${year}${month}${day}`;

  return `TAB-${datePart}-${nasbah_id}`;
}

export function formatLocalDate(date: string) {
  const dateValue = new Date(date);
  if (!isNaN(dateValue.getTime())) {
    return new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta', // Adjusts for WIB timezone (UTC+7)
    }).format(dateValue);
  }
}

export function generateColor(name: string): string {
  // Simple hash to color
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - color.length) + color;
}

// NIK Encryption utilities
export function generateEncryptionKeys() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  return { publicKey, privateKey };
}

export function encryptNIK(nik: string, publicKeyPem: string): string {
  try {
    const encrypted = crypto.publicEncrypt(
      {
        key: publicKeyPem,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      Buffer.from(nik, 'utf8')
    );
    return encrypted.toString('base64');
  } catch (error) {
    throw new Error(`Failed to encrypt NIK: ${error.message}`);
  }
}

export function decryptNIK(encryptedNik: string, privateKeyPem: string): string {
  try {
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKeyPem,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      Buffer.from(encryptedNik, 'base64')
    );
    return decrypted.toString('utf8');
  } catch (error) {
    throw new Error(`Failed to decrypt NIK: ${error.message}`);
  }
}