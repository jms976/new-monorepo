'use client';

import { useState } from 'react';

import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@common/ui';
import { useUpdateEffect } from '@common/utils';
import { palette } from '@common/tokens';

export default function Page() {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    alert(count);
    console.log(palette.blue[5]);
  }, [count]);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-lime-9 font-bold underline">Hello World</h1>
        <Button onClick={() => setCount((prev) => (prev += 1))}>test</Button>
        <Badge>{count}</Badge>
        <div className="flex justify-between items-center gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
