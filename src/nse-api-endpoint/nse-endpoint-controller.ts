import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import  { Response} from 'express';
import { NseApiEndpointService } from './nse-api-endpoint-service';

@Controller()
@ApiTags('NSE Endpoints')

export class ScreenerAPIControllerNSE {
  constructor(private readonly nseApiEndpointService: NseApiEndpointService){}

  @ApiOperation({summary : 'Get all NSE indices'})
  @Get('screener-api/nse-indices')
  async getAllNseIndices(@Res() res: Response): Promise<any> {
    const response = await this.nseApiEndpointService.getAllNseIndices();
    if (response && response.data) {
        return res.status(HttpStatus.OK).send(response);
    }
    return res.status(HttpStatus.BAD_REQUEST).send(response);
  }

}
