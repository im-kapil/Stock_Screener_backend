import { Module } from '@nestjs/common';
import { ScreenerApisModule } from './screener_apis/screener_apis.module';

@Module({
  imports: [ScreenerApisModule],
  providers: [],
})
export class AppModule {}
