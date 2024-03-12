"use client"

import { useState, FormEvent } from 'react'

const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if (
            hostname.includes('amazon.com') ||
            hostname.includes('amazon.') ||
            hostname.endsWith('amazon')) {
            return true;
        }
    } catch (error) {
        return false;
    }

}

const searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //in typescript you need to definet the event
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPrompt);
        //notify user that link was either valid or invalid
        //alert(isValidLink ? 'Valid Link' : 'Invalid Link')

        if (!isValidLink) return alert('Please provide a valid Amamzon Link')

        try {
            setIsLoading(true);
            //this is when we scrape the product
        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(true);
        }
    }

    return (
        <form
            className="flex flex-wrap gap-4 mt-12"
            onSubmit={handleSubmit}
        >


            <input
                type="text"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder="Enter product link"
                className="searchbar-input" />

            <button
                type="submit"
                className="searchbar-btn"
                disabled={searchPrompt === ''}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    )
}

export default searchbar