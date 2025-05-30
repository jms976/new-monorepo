import { type IconProps } from '../types';
import CreateIcon from '../CreaateIcon';

const addPath = (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M9 2.5C9 2.22386 8.77614 2 8.5 2C8.22386 2 8 2.22386 8 2.5V7.5H3C2.72386 7.5 2.5 7.72386 2.5 8C2.5 8.27614 2.72386 8.5 3 8.5H8V13.5C8 13.7761 8.22386 14 8.5 14C8.77614 14 9 13.7761 9 13.5V8.5H14C14.2761 8.5 14.5 8.27614 14.5 8C14.5 7.72386 14.2761 7.5 14 7.5H9V2.5Z"
  />
);

const AddIcon = (props: IconProps) =>
  CreateIcon({
    paths: addPath,
    viewBox: '0 0 17 16',
    ...props,
  });

export default AddIcon;
