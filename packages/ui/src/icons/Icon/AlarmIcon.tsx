import { LucideProps } from 'lucide-react';
import Alarm from '../svg/Alarm.svg';

const AlarmIcon = ({ color = 'currentColor', size = 24, ...rest }: LucideProps) => {
  return <Alarm width={size} height={size} fill={color} viewBox="0 0 22 28" {...rest} />;
};

export default AlarmIcon;
