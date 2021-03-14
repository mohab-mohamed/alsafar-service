import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health-check')
  getHello(@Req() request: Request,
  @Res({ passthrough: true }) response: Response,){
    console.log('test');
    response.json('hello');
  }

  @Get('/getCookies')
  findAllCookies(@Req() request: Request) {
    return request.cookies; // or "request.cookies['cookieKey']"
    // or console.log(request.signedCookies);
  }

  @Get('/cookie')
  createCookieSession(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): void {
    return this.appService.createCookieSession(request, response);
  }
}
