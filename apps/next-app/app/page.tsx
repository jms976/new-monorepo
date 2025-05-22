'use client';

import { Button, ConfirmDialog } from '@common/ui';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <h1 className="text-2xl text-juiGrey-400 font-bold underline">Hello World</h1>

        <PieChartIcon variant="primary" />
        <AddIcon variant="primary" />
        <AlarmIcon variant="error" size="medium" />
        <CournerDownRightIcon variant="secondary" size="large" />
        <Button variant="juiGradient" onClick={() => setCount((prev) => prev + 1)}>
          Count: {count}
        </Button> */}

        <ConfirmDialog
          title="삭제하시겠습니까?"
          description="이 작업은 되돌릴 수 없습니다."
          onConfirm={() => console.log('삭제됨')}>
          <Button>삭제</Button>
        </ConfirmDialog>

        <ConfirmDialog
          title="로그아웃 하시겠습니까?"
          trigger={<Button>로그아웃</Button>}
          onConfirm={() => console.log('로그아웃')}
          cancelLabel="아니요"
          confirmLabel="예"
        />

        {/* <ConfirmDialog
          title="로그아웃 하시겠습니까?"
          trigger={<Button>로그아웃</Button>}
          onConfirm={() => console.log('로그아웃')}
          cancelLabel="아니요"
          confirmLabel="예">
          <Button>삭제</Button>
        </ConfirmDialog> */}
      </div>
    </div>
  );
}
