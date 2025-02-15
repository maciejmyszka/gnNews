import { forwardRef } from 'react';

export const ListIcon = forwardRef<SVGSVGElement | null>((props, ref) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='Outline'
    viewBox='0 0 24 24'
    width='25'
    height='25'
    {...props}
    ref={ref}
  >
    <rect y='11' width='24' height='2' rx='1' />
    <rect y='4' width='24' height='2' rx='1' />
    <rect y='18' width='24' height='2' rx='1' />
  </svg>
));
