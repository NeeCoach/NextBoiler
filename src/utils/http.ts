import axios from 'axios';

export const LEMONSQUEEZY_API = 'https://api.lemonsqueezy.com/v1/';

// create axios instance

export const lemonSqueezyApiInstance = axios.create({
    baseURL: LEMONSQUEEZY_API,
    headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
    },
    });