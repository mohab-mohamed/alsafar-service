import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './database/entities/user/user.module';
import { AmadeusModule } from './amadeus/amadeus.module';


@Module({
  imports: [UserModule, AmadeusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
