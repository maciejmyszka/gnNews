import { forwardRef } from 'react';

export const TurkeyIcon = forwardRef<SVGSVGElement | null>((props, ref) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1200 800'
    width='35px'
    {...props}
    ref={ref}
  >
    <path fill='#E30A17' d='M0 0h1200v800H0z' />
    <circle cx='425' cy='400' r='200' fill='#fff' />
    <circle cx='475' cy='400' r='160' fill='#e30a17' />
    <path
      fill='#fff'
      d='M583.334 400l180.901 58.779-111.804-153.885v190.212l111.804-153.885z'
    />
  </svg>
));
