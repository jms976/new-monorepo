'use client';

import { Button, Checkbox, ConfirmAlertDialog } from '@common/ui';
import { cn } from '@common/ui/lib/utils';
import CustomDialog from './components/CustomDialog';

export default function Page() {
  const propsTest = 'props 테스트';

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

        <ConfirmAlertDialog
          title="삭제하시겠습니까?"
          description="이 작업은 되돌릴 수 없습니다."
          onConfirm={() => console.log('삭제됨')}>
          <Button>삭제</Button>
        </ConfirmAlertDialog>

        <ConfirmAlertDialog
          title="로그아웃 하시겠습니까?"
          trigger={<Button>로그아웃</Button>}
          onConfirm={() => console.log('로그아웃')}
          cancelLabel="아니요"
          confirmLabel="예"
        />

        <CustomDialog cardData={propsTest}>
          <Button>커스텀</Button>
        </CustomDialog>

        <Checkbox />

        <div className="flex items-center space-x-2  bg-juiPrimary h-9">
          <label
            htmlFor="terms"
            className={cn(
              'text-sm font-medium leading-none h-full flex items-center px-3.5 gap-2',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            )}>
            <Checkbox id="terms" />
            Accept terms and conditions
          </label>
        </div>
      </div>
    </div>
  );
}
