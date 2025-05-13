import { createElement, CSSProperties, MouseEvent } from 'react';
import * as svg from './svg';

export type PIconType = keyof typeof svg;
export type PIconProps = {
  name: PIconType;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<SVGSVGElement>) => void;
  fill?: string;
};

function IconWrapper({ name, className, style, onClick, fill, ...rest }: PIconProps) {
  return createElement(svg[name], {
    className,
    onClick,
    style,
    fill,
    ...rest,
  });
}

export default IconWrapper;
