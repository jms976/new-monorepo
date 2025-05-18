import { Button } from '@common/ui';
import { AddIcon, AlarmIcon, CournerDownRightIcon, PieChartIcon } from '@common/ui/icons';

function App() {
  return (
    <main className={` bg-juiBackground-default text-juiText-primary`}>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl  font-bold underline">Hello World</h1>
          <PieChartIcon variant="secondary" />
          <AlarmIcon variant="primary" />
          <AddIcon variant="primary" />
          <CournerDownRightIcon variant="primary" />
          <Button>aaaa</Button>
        </div>
      </div>
    </main>
  );
}

export default App;
