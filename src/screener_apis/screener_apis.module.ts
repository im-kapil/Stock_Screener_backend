import { Module } from '@nestjs/common';
import { ScreenerApiController } from './screener_api_controller';
import { ScreenerAPIService } from './screener_api_service';

@Module({
    controllers: [ ScreenerApiController ],
    providers: [ScreenerAPIService],
})
export class ScreenerApisModule {}
