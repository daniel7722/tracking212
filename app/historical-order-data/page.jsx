import { Suspense } from 'react';

import HistoricalDataDisplay from '@/components/historical/HistoricalDataDisplay';
import { getHistoricalOrderData } from '@/lib/http';

async function HistoricData() {
  const data = await getHistoricalOrderData();

  return <HistoricalDataDisplay data={data} />;
}

export default function HistoricalOrderData() {
  return (
    <main className="w-3/4 h-full p-2 m-auto bg-[var(--bg-color)]">
      <Suspense fallback={<div>Loading...</div>}>
        <HistoricData />
      </Suspense>
    </main>
  );
}
