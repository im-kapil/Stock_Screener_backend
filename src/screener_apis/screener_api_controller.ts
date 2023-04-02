import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ScreenerAPIService } from './screener_api_service';

@Controller()
@ApiTags('Screener APIs')

export class ScreenerApiController {
    nseIndia:object;
    constructor(private readonly screenerApiService: ScreenerAPIService){}

@ApiOperation({summary : 'Endpoint to get the nse-india constructor initialization data'})
  @Get('screener-api/constructor')
  async getConstructor(): Promise<any> {
    return await this.screenerApiService.getConstructor();
  }
  @ApiOperation({summary : 'Endpoint to get all equity symbols'})
  @Get('screener-api/get-all-equity-symbol')
  async getAllSymbol(): Promise<any> {
    return await this.screenerApiService.getAllSymbol();
  }
  @ApiOperation({summary : 'Endpoint to get the equity details via symbol'})
  @Get('screener-api/get-equity-details/:equitySymbol')
  @ApiParam({
    name: 'equitySymbol',
    type: String,
    description: 'symbol of the equity',
    example: 'ITC',
    required: true,
  })
  async getEquiryDetails(@Param('equitySymbol') equitySymbol: string): Promise<any> {
    return await this.screenerApiService.getEquityDetailsViaSymbol(equitySymbol);
  }
}
