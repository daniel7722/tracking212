export async function getHistoricalOrderData() {
  // Try multiple ways to get the base URL
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const resp = await fetch(`${baseUrl}/api/historical-order`);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
