import { Module } from '@nestjs/common';
import { ScreenerAPIControllerNSE } from './nse-endpoint-controller';
import { NseApiEndpointService } from './nse-api-endpoint-service';
@Module({
    controllers: [ ScreenerAPIControllerNSE ],
    providers: [NseApiEndpointService],
})
export class NseApiEndpointModule {}
