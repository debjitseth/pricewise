"use server" //all the code here will only run on the server end

import { scapeAmazonProduct } from "../scraper";
import { connectToDB } from "../mongoose";

export async function scrapeAndStoreProduct(productUrl: string){
    if(!productUrl) return;

    //try catch block as we are dealing with async and database actions
    try {
        connectToDB();
        const scrapedProduct = await scapeAmazonProduct(productUrl);

        if(!scrapedProduct) return;

        let product = scrapedProduct;

        //const existngProduct = await Product

    } catch (error:any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
        
    }
}