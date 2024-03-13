"use server" //all the code here will only run on the server end

import { scapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string){
    if(!productUrl) return;

    //try catch block as we are dealing with async and database actions
    try {
        const scrapedProduct = await scapeAmazonProduct(productUrl);
    } catch (error:any) {
        throw new Error (`Failed to create/update product: ${error.message}`)
        
    }
}