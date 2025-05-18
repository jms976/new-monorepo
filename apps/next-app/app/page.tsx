'use client';

import { useState } from 'react';

import { useUpdateEffect } from '@common/utils';
import { Button } from '@common/ui';
import { AddIcon, AlarmIcon, CournerDownRightIcon, PieChartIcon } from '@common/ui/icons';

export default function Page() {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    alert(count);
  }, [count]);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-juiGrey-400 font-bold underline">Hello World</h1>

        <PieChartIcon variant="primary" />
        <AddIcon variant="primary" />
        <AlarmIcon variant="error" size="medium" />
        <CournerDownRightIcon variant="secondary" size="large" />
        <Button onClick={() => setCount((prev) => prev + 1)}>Count: {count}</Button>
      </div>
    </div>
  );
}
