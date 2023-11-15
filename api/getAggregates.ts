import axios from 'axios';

export default async function getAggregates(ticker) {
  try {
    let closeStockPrices: number[] = [];

    const result = await axios(
      `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-09-01/2023-11-10?adjusted=true&sort=asc&limit=120&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`,
    );
    const aggregates = result.data.results;

    aggregates.forEach((element: { c: number }) => {
      closeStockPrices.push(element.c);
    });

    return closeStockPrices;
  } catch (error) {
    console.error('getAggregates Error', error);
  }
}
