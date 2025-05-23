import { type IconProps } from '../types';
import CreateIcon from '../CreaateIcon';

const alarmPath = (
  <path d="M 20.5 22 H 19.8 V 11.4 C 19.8 7 16.5 3.3 12.3 2.7 V 1.5 C 12.3 0.8 11.7 0.3 11 0.3 C 10.3 0.3 9.8 0.8 9.8 1.5 V 2.7 C 5.5 3.3 2.3 7 2.3 11.4 V 22 H 1.5 C 0.9 22 0.5 22.4 0.5 23 V 24 C 0.5 24.1 0.6 24.3 0.8 24.3 H 7.5 C 7.5 26.2 9.1 27.8 11 27.8 C 12.9 27.8 14.5 26.2 14.5 24.3 H 21.3 C 21.4 24.3 21.5 24.1 21.5 24 V 23 C 21.5 22.4 21.1 22 20.5 22 Z M 11 25.8 C 10.2 25.8 9.5 25.1 9.5 24.3 H 12.5 C 12.5 25.1 11.8 25.8 11 25.8 Z" />
);

const AlarmIcon = (props: IconProps) =>
  CreateIcon({
    paths: alarmPath,
    viewBox: '0 0 22 28',
    ...props,
  });

export default AlarmIcon;
