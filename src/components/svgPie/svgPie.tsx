import * as React from 'react';
// import { Text } from '@vx/text';

const PieChart = (props: any) => (
  <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 90.125 90.125" {...props}>
    <path
      d="M45.062,45.062,31.137,2.206A42.818,42.818,0,0,1,45.062,0Z"
      style={{ fill: '#e27fe5' }}
    />
    <path
      d="M45.062,45.062,2.206,31.137A43.7,43.7,0,0,1,31.137,2.206Z"
      style={{ fill: '#c333ff' }}
    />
    <path
      d="M45.062,45.062V90.125A45.062,45.062,0,0,1,0,45.062,42.818,42.818,0,0,1,2.206,31.137Z"
      style={{ fill: '#ff2ab8' }}
    />
    <path
      d="M45.062,45.062V0a45.063,45.063,0,1,1,0,90.125h0Z"
      style={{ fill: '#7caace' }}
    />
    <text
      transform="translate(61.211 49.099)"
      style={{
        fontSize: '9.117480278015137px',
        fill: '#60146a',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      50%
    </text>
    <text
      transform="translate(17.278 63.262)"
      style={{
        fontSize: '9.117480278015137px',
        fill: '#60146a',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      30%
    </text>
    <text
      transform="translate(18.334 27.63)"
      style={{
        fontSize: '9.117480278015137px',
        fill: '#60146a',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      15%
    </text>
    <text
      transform="translate(37.015 18.171)"
      style={{
        fontSize: '9.117480278015137px',
        fill: '#60146a',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      5%
    </text>
  </svg>
);

export default PieChart;
