import { type IconProps } from '../types';
import CreateIcon from '../CreaateIcon';

const cournerDownRightPath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9107 7.74408C12.2362 7.41864 12.7638 7.41864 13.0892 7.74408L17.2559 11.9107C17.5813 12.2362 17.5813 12.7638 17.2559 13.0893L13.0892 17.2559C12.7638 17.5814 12.2362 17.5814 11.9107 17.2559C11.5853 16.9305 11.5853 16.4028 11.9107 16.0774L15.4881 12.5L11.9107 8.92259C11.5853 8.59715 11.5853 8.06951 11.9107 7.74408Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.33333 2.5C3.79357 2.5 4.16667 2.8731 4.16667 3.33333V9.16667C4.16667 10.5474 5.28595 11.6667 6.66667 11.6667H16.6667C17.1269 11.6667 17.5 12.0398 17.5 12.5C17.5 12.9602 17.1269 13.3333 16.6667 13.3333H6.66667C4.36548 13.3333 2.5 11.4679 2.5 9.16667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5Z"
    />
  </>
);

const CournerDownRightIcon = (props: IconProps) =>
  CreateIcon({
    paths: cournerDownRightPath,
    viewBox: '0 0 20 20',
    ...props,
  });

export default CournerDownRightIcon;
