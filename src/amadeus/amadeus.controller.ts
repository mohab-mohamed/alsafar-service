import { Controller, Get, Req, Res, Param, Query } from '@nestjs/common';
import { AmadeusService } from './amadeus.service';
import { Request, Response } from 'express';
import { AxiosResponse } from 'axios';

import { AmadeusToken } from './token.interface';
import { AutoCompleteQuery} from './interfaces/autoCompleteQuery.interface';

import {AutoCompleteResponse} from './interfaces/autoCompleteResponse.interface';

@Controller('amadeus')
export class AmadeusController { 
  constructor(private amadeusService: AmadeusService) {}

  @Get('access')
  async getAccessToken(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    if(request.signedCookies['amadeusAuth']) {
        return;
    }
    const tokenData: AxiosResponse<AmadeusToken> = await this.amadeusService.getToken();
    response.cookie('amadeusAuth', tokenData.data.access_token, {
      maxAge: tokenData.data.expires_in * 1000,
      signed: true,
    });
  }

  @Get('autocomplete')
  async autocompletePlace(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
    @Query() query: AutoCompleteQuery
  ) {
    // if(!request.signedCookies['amadeusAuth']) {
    //     this.getAccessToken(request, response);
    // }
    const authToken = request.signedCookies['amadeusAuth'];
    const placesData:  AxiosResponse<AutoCompleteResponse> = await this.amadeusService.getCityOrAirport(authToken, query.subType, query.keyword);
    console.log(placesData.data.data);
    response.json(placesData.data.data);
  }
}
