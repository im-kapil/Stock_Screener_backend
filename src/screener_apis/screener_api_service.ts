/* eslint-disable no-await-in-loop */
import { Injectable, Logger } from '@nestjs/common';
import { NseIndia } from 'stock-nse-india';


@Injectable()
export class ScreenerAPIService {
    nseIndia = new  NseIndia()
    private readonly logger = new Logger(ScreenerAPIService.name);

  async getConstructor():Promise<any>{
   try {
    return await this.nseIndia;
   } catch (error) {
    throw new Error(error.message);
   }
  }

  
  async getAllSymbol():Promise<any>{
    try {
     return await this.nseIndia.getAllStockSymbols();
    } catch (error) {
     throw new Error(error.message);
    }
   }

   async getEquityDetailsViaSymbol(symbol:string):Promise<any>{
    try {
        const equityData:any = await this.nseIndia.getEquityDetails(symbol);
        if(!equityData.error){
            return { data: equityData };
        }
        return {
            error: [{
                type: 'Get Equity info error',
                message: equityData
            }]
        }
    } catch (error) {
        this.logger.log('Error in getEquityDetailsViaSymbol():', error.message);
        throw new Error(error.message);
    }
   }


}