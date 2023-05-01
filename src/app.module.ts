import { Module } from '@nestjs/common';
import { ScreenerApisModule } from './screener_apis/screener_apis.module';
import { NseApiEndpointModule } from './nse-api-endpoint/nse-api-endpoint.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(), 
    NseApiEndpointModule,
    ScreenerApisModule
  ],
  providers: [],
})
export class AppModule {}
