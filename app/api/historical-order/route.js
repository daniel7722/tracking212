import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const API_KEY = process.env.TRADING_212_API_KEY;

    if (!API_KEY) {
      throw new Error('Trading 212 API key not found in environment variables');
    }

    const query = new URLSearchParams({
      cursor: '0',
      limit: '50',
    }).toString();

    const response = await fetch(
      `https://live.trading212.com/api/v0/equity/history/orders?${query}`,
      {
        method: 'GET',
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
