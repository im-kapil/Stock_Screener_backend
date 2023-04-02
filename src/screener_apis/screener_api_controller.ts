import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ScreenerAPIService } from './screener_api_service';
import  { Response} from 'express';


@Controller()
@ApiTags('Simple Screener APIs')

export class ScreenerApiController {
    nseIndia:object;
    constructor(private readonly screenerApiService: ScreenerAPIService){}

    @ApiOperation({summary : 'Endpoint to get the nse-india constructor initialization data'})
    @Get('screener-api/constructor')
    async getConstructor(): Promise<any> {
        return await this.screenerApiService.getConstructor();
    }
    @ApiOperation({summary : 'Endpoint to get all equity symbols'})
    @Get('screener-api/all-equity-symbol')
    async getAllSymbol(): Promise<any> {
        return await this.screenerApiService.getAllSymbol();
    }
  @ApiOperation({summary : 'Endpoint to get the equity details via symbol'})
  @Get('screener-api/equity-details/:equitySymbol')
  @ApiParam({
    name: 'equitySymbol',
    type: String,
    description: 'symbol of the equity',
    example: 'ITC',
    required: true,
  })
  async getEquityDetails(@Param('equitySymbol') equitySymbol: string,  @Res() res: Response): Promise<any> {
    const response = await this.screenerApiService.getEquityDetailsViaSymbol(equitySymbol);
    if (response && response.data) {
        return res.status(HttpStatus.OK).send(response);
    }
    return res.status(HttpStatus.BAD_REQUEST).send(response);
  }
  @ApiOperation({summary : 'Endpoint to get historical data of equity'})
  @Get('screener-api/historical-data/:equitySymbol/:startDate/:endDate')
  @ApiParam({
    name: 'equitySymbol',
    type: String,
    description: 'symbol of the equity',
    example: 'ITC',
    required: true,
  })
  @ApiParam({
    name: 'startDate',
    type: String,
    description: 'startDate (YYYY/MM/DD)',
    example: '2020-01-01',
    required: true,
  })
  @ApiParam({
    name: 'endDate',
    type: String,
    description: 'endDate (YYYY/MM/DD)',
    example: '2023-01-01',
    required: true,
  })
  async getEquityHistoricalData(
    @Param('equitySymbol') equitySymbol: string,
    @Param('startDate') startDate: string , 
    @Param('endDate') endDate: string , 
    @Res() res: Response
    ): Promise<any> {
    const range = {
        start: new Date(startDate),
        end: new Date(endDate),
    }
    const response = await this.screenerApiService.getEquityHistoricalData(equitySymbol, range);
    if (response && response.data) {
        return res.status(HttpStatus.OK).send(response);
    }
    return res.status(HttpStatus.BAD_REQUEST).send(response);
  }

  @ApiOperation({summary : 'Endpoint to get total number of nse listed stocks'})
  @Get('screener-api/total-nse-listings')
  async totalNseListings(
    @Res() res: Response
    ): Promise<any> {
    const response = await this.screenerApiService.totalNseListings();
    if (response && response.data) {
        return res.status(HttpStatus.OK).send(response);
    }
    return res.status(HttpStatus.BAD_REQUEST).send(response);
  }
}
