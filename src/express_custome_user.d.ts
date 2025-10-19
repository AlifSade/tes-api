import { Request } from 'express';

// Augmenting the Express Request interface to include `user`
declare global {
  namespace Express {
    interface Request {
      user?: {
        uuid: string;
        platform: string;
      };
    }
  }
}