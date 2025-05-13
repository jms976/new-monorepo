import { LucideProps } from 'lucide-react';
import Add from '../svg/Add.svg';

const AddIcon = ({ color = 'currentColor', size = 24, ...rest }: LucideProps) => {
  return <Add width={size} height={size} fill={color} viewBox="0 0 17 16" {...rest} />;
};

export default AddIcon;
