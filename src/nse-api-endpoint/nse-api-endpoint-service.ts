/* eslint-disable no-await-in-loop */
import { Injectable, Logger } from '@nestjs/common';
// import { NseIndia } from 'stock-nse-india';
import { DateRange } from 'stock-nse-india/build/interface';
import axios from 'axios';


@Injectable()
export class NseApiEndpointService {
    private readonly logger = new Logger(NseApiEndpointService.name);

    async getAllNseIndices() {
        console.log("inside" , `${process.env.NSE_API_ENDPOINT_BASE_URL}${process.env.NSE_API_SLUG}allIndices`);
        const allIndices = await axios.get(`${process.env.NSE_API_ENDPOINT_BASE_URL}${process.env.NSE_API_SLUG}allIndices`)
        console.log("allIndices::::", allIndices.data);
        return { data: allIndices?.data }
    }

 
  
  async getAllSymbol():Promise<any>{
    try {
    //  return await this.nseIndia.getAllStockSymbols();
  
    } catch (error) {
     throw new Error(error.message);
    }
   }

   async getEquityDetailsViaSymbol(symbol:string):Promise<any>{
    try {
        console.log("process.env.NSE_API_ENDPOINT_BASE_URL:::::", process.env.NSE_API_ENDPOINT_BASE_URL);
        return {
            data: process.env.NSE_API_ENDPOINT_BASE_URL
        }
        // const equityData:any = await this.nseIndia.getEquityDetails(symbol);
        // if(!equityData.error){
        //     return { data: equityData };
        // }
        // return {
        //     error: [{
        //         type: 'Get Equity info error',
        //         message: equityData
        //     }]
        // }
    } catch (error) {
        this.logger.log('Error in getEquityDetailsViaSymbol():', error.message);
        throw new Error(error.message);
    }
   }

   async getEquityHistoricalData(symbol: string, range: DateRange):Promise<any>{
    try {
        // const equityData:any = await this.nseIndia.getEquityHistoricalData(symbol, range);
        // return { data: equityData };
    } catch (error) {
        this.logger.log('Error in getEquityHistoricalData():', error.message);
        throw new Error(error.message);
    }
   }

   async totalNseListings(): Promise<any>{
    try {
        const allSymbol =  await this.getAllSymbol();
        return { data: allSymbol?.length };
    } catch (error) {
        throw new Error(error.message);
    }
   }

}
