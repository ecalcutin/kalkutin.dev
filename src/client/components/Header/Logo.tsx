import React from 'react';

type Props = {
  readonly height?: number;
};

export const Logo: React.FC<Props> = props => {
  const { height } = props;

  return (
    <svg
      height={height || 45}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='10 0 330 430'
    >
      <title>Kalkutin Evgenii</title>
      <polygon
        stroke='currentcolor'
        strokeWidth={20}
        points='20 118.997 20 309 174.999 404 330 309 330 118.997 174.999 24 20 118.997'
        style={{
          fillOpacity: 0.1,
          fillRule: 'nonzero',
        }}
      />
      <text
        x='175'
        y='230'
        style={{
          fill: 'currentColor',
          fontFamily: 'Arial, sans-serif',
          fontSize: '180',
          textAnchor: 'middle',
          dominantBaseline: 'middle',
        }}
      >
        K
      </text>
    </svg>
  );
};
