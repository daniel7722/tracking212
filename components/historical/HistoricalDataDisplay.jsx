export default function HistoricalDataDisplay({ data }) {
  const { items } = data;
  console.log(items);

  return (
    <>
      <h2 className="text-2xl mb-4">History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Ticker</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price Per Share</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const { id, type, ticker, orderedQuantity, dateCreated, fillPrice } = item;

              const formattedTicker = ticker.split('_')[0];

              const date = new Date(dateCreated);
              const formattedDate = date.toLocaleDateString();
              const formattedTime = date.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              });
              const formattedDateTime = `${formattedDate} ${formattedTime}`;

              const formattedPrice = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(fillPrice);

              if (formattedPrice === '$0.00' || !orderedQuantity) return null;

              const totalPrice = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(fillPrice * orderedQuantity);

              return (
                <tr key={id}>
                  <td className="border border-gray-300 px-4 py-2">{formattedDateTime}</td>
                  <td className="border border-gray-300 px-4 py-2">{type}</td>
                  <td className="border border-gray-300 px-4 py-2">{formattedTicker}</td>
                  <td className="border border-gray-300 px-4 py-2">{orderedQuantity}</td>
                  <td className="border border-gray-300 px-4 py-2">{formattedPrice}</td>
                  <td className="border border-gray-300 px-4 py-2">{totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
