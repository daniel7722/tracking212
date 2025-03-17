import { Suspense } from 'react';

import HistoricalDataDisplay from '@/components/historical/HistoricalDataDisplay';
import { getHistoricalOrderData } from '@/lib/http';

async function HistoricData() {
  const data = await getHistoricalOrderData();

  return <HistoricalDataDisplay data={data} />;
}

export default function HistoricalOrderData() {
  return (
    <main className="bg-[var(--bg-color)]">
      <h2>Historic Order Data</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <HistoricData />
      </Suspense>
    </main>
  );
}
