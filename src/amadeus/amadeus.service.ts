import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

import { AmadeusToken } from './token.interface';
import {AutoCompleteResponse} from './interfaces/autoCompleteResponse.interface';

@Injectable()
export class AmadeusService {
  
  constructor(private readonly httpService: HttpService) {}

  async getToken(): Promise<AxiosResponse<AmadeusToken>> {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const params = new URLSearchParams({
        client_id: 'ybfySGpJOUJGgEBAe7qFHD7n7qvDtM7T',
        client_secret: 'uPnOUrMDLrpuic9X',
        grant_type: 'client_credentials',
      });

    return this.httpService.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      params
      ,
      config,
    ).toPromise();
  }

  async getCityOrAirport(authToken: string, subType: string, keyword: string): Promise<AxiosResponse<AutoCompleteResponse>> {

      const config: AxiosRequestConfig = {
          headers: {
            Authorization: `Bearer ${authToken}` 
          },
          params: {
              subType: subType,
              keyword: keyword
          }
      }
      return this.httpService.get('https://test.api.amadeus.com/v1/reference-data/locations', config).toPromise();
  }


}
