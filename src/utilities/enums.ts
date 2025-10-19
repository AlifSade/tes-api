export enum StatusEnum {
  active = 1,
  inactive = 0,
  reject = 2,
  complete = 4,
  pending = 5,
}

export enum StatusTextEnum {
  active = 'Active',
  inactive = 'Not Active',
  reject = 'Reject',
  complete = 'Complete',
  pending = 'Pending',
}

export enum VerifiedEnum {
  verified = 1,
  notVerified = 0,
}

export enum GenderEnum {
  pria = 'pria',
  wanita = 'wanita',
}

export enum SetorStatus {}

export enum TransaksiStatusCode {
  active = 1,
  not_active = 0,
  waiting_payment = 1,
  reject = 2,
  complete = 4,
  pending = 5,
}

export enum OrderStatus {
  approve = 'approve',
  complete = 'completed',
}

export enum TransaksiStatus {
  not_active = 'Not Active',
  active = 'Active',
  waiting_payment = 'Waiting Payment',
  reject = 'Reject',
  complete = 'Complete',
  pending = 'Pending',
}

export enum StatusCode {
  success = '0000',
  failed = '0001',
  approved = '0002',
  rejected = '0007',
  canceled = '0008',
  pending = '0009',
}

export enum OnboardingStepEnum {
  fillWhatsappNumber = 1,
  verifyOTP = 2,
  fillProfile = 3,
  success = 4,
}

export enum OnboardingStepTypeEnum {
  nasabah = 'nasabah',
  pengurus = 'pengurus',
}

export enum DaysOfWeekName {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
}

export enum GlobalEnum {
  system = 'system',
}

export enum itAdmin {
  whatsapp = '+6287888111778',
}

export enum Worksheet {
  TRANSAKSI_NASABAH = 'TRANSAKSI_NASABAH',
}

export enum ExcelImportFile {
  IMPORT_TRANSAKSI = 'IMPORT_TRANSAKSI',
}

export const DefaultContent = {
  order_note: 'Sampah sudah dibersihkan dan dipisahkan dengan baik',
};
