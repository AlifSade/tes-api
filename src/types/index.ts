import { Decimal } from '@prisma/client/runtime/library';

export type ISignIn = {
  tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
};

export type IHttpException = {
  [x: string]: any;
  status: string | boolean;
  msg: string;
  type?: 'validation' | 'http';
};

export type IExternalResponse = {
  status: string;
  msg: {
    response: {
      Status: number;
      msg: any;
    };
    data: {
      platOrderNo: string;
      payAmount: string;
      natvTrNo?: string;
      withAmt?: string;
    };
    errorMsg?: string;
  };
  data: any;
};

export type IJWTPayload = {
  platform: string;
  uuid: string;
  iat?: string;
  exp?: string;
};

export type IUserAuth = {
  uuid: string | undefined;
  complete_onboarding: boolean | null;
  nama: string | null;
  type: string;
};

export type IGlobalResponse = {
  status: '0001' | '0000';
  // statusCode: string;
  data?: any;
  msg: null | string | Record<string, string>;
};

export type ICekNIKResponse = {
  nik: string;
  nama: string;
  jenis_kelamin: string;
  tanggal_lahir: string;
};
