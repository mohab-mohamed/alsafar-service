import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AmadeusService } from './amadeus.service';
import { AmadeusController } from './amadeus.controller';

@Module({
  imports: [HttpModule],
  providers: [
    AmadeusService
  ],
  controllers: [
    AmadeusController
  ]
})
export class AmadeusModule {}