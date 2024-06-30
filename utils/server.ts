const apiConfig = {
  apiKey: process.env.HIAINIME_API_KEY,
  host: process.env.HIANIME_API_HOST,
};

export const headers = {
  "x-rapidapi-key": apiConfig.apiKey,
  "x-rapidapi-host": apiConfig.host,
};

export const baseUrl = "https://hianime.p.rapidapi.com";
