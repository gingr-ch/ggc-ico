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
    <path
      d="M45.153,45.145,18.632,8.593A42.964,42.964,0,0,1,31.225,2.186Z"
      style={{ fill: '#e27fe5' }}
    />
    <text
      style={{
        fontSize: '9.117480278015137px',
        fill: '#60146a',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(61.211 49.099)"
    >
      50%
    </text>
    <text
      style={{
        fontSize: '9.117480278015137px',
        fill: '#60146a',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(17.278 63.262)"
    >
      30%
    </text>
    <text
      style={{
        fontSize: '9.117480278015137px',
        fill: '#60146a',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(12.887 31.63)"
    >
      <tspan style={{ letterSpacing: '-0.0029990467943137354em' }}>1</tspan>
      <tspan x="3.1" y="0">
        0%
      </tspan>
    </text>
    <text
      style={{
        fontSize: '9.117480278015137px',
        fill: '#60146a',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(28.005 18.171)"
    >
      <tspan style={{ letterSpacing: '-0.0029990467943137354em' }}>1</tspan>
      <tspan x="3.1" y="0">
        0%
      </tspan>
    </text>
  </svg>
);

export default PieChart;
