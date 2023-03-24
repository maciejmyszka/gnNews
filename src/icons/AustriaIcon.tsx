import { forwardRef } from 'react';

export const AustriaIcon = forwardRef<SVGSVGElement | null>((props, ref) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    shapeRendering='geometricPrecision'
    textRendering='geometricPrecision'
    imageRendering='optimizeQuality'
    fillRule='evenodd'
    viewBox='0 0 39.06 27.17'
    {...props}
    width='35px'
    ref={ref}
  >
    <g fillRule='nonzero'>
      <path
        fill='#ED2939'
        d='M2.15 0h34.76c1.18 0 2.15.97 2.15 2.15v6.82H0V2.15C0 .97.97 0 2.15 0zm36.91 18.2v6.82c0 1.18-.97 2.15-2.15 2.15H2.15A2.16 2.16 0 0 1 0 25.02V18.2h39.06z'
      />
      <path fill='#fff' d='M0 8.97h39.06v9.23H0z' />
    </g>
  </svg>
));
