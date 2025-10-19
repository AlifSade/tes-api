import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import * as crypto from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusEnum } from 'src/utilities/enums';

@Injectable()
export class SignInGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const clientID = request.headers['client-id'];

    const start = '-----BEGIN PUBLIC KEY-----\n';
    const end = '\n-----END PUBLIC KEY-----';

    let publicKey = '';
    let secret = '';

    // get public key and secret key
    const token = await this.prisma.user_token.findFirst({
      where: {
        uuid: clientID,
        status: StatusEnum.active,
      },
    });

    try {
      const verify = crypto.createVerify('RSA-SHA256');

      verify.update(clientID);
      verify.end();

      if (token) {
        publicKey = start + token.public_key + end;
        secret = token.secret;
      }
      verify.verify(publicKey, secret, 'base64');
    } catch (e) {
      console.log('error : ', e);
      throw new UnauthorizedException();
    }

    return true;
  }
}
