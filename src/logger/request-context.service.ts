import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestContextService {
  private static instance: RequestContextService;
  private context: Record<string, any> = {};

  constructor() {
    // Store static reference to itself
    RequestContextService.instance = this;
  }

  static getInstance(): RequestContextService {
    return RequestContextService.instance;
  }

  set(key: string, value: any) {
    this.context[key] = value;
  }

  get(key: string) {
    return this.context[key];
  }

  clear() {
    this.context = {};
  }
}
