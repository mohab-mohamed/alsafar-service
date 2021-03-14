import { Injectable } from '@nestjs/common';
import { Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createCookieSession(@Req() request: Request, @Res({passthrough: true}) resp: Response): void {
    resp.cookie('test', '123', {maxAge: 5000, signed: true});
  }
  
}
