import * as React from 'react';

const LegallyApproved = (props: any) => (
  <svg viewBox="0 0 28.821 24.758" {...props}>
    <title>Legally Approved</title>
    <g id="legallyApproved" data-name="Legally Approved">
      <circle
        cx="14.634"
        cy="12.379"
        r="12.179"
        style={{
          fill: 'none',
          stroke: '#fff',
          strokeMiterlimit: 10,
          strokeWidth: '0.4px',
        }}
        className="stamp-hover-stroke"
      />
      <rect
        y="14.374"
        width="28.821"
        height="4.859"
        style={{ fill: '#f195ff' }}
      />
      <text
        transform="translate(3.122 18.343)"
        style={{
          fontSize: '3.95165px',
          fill: '#fff',
          fontFamily: 'Asap, sans-serif',
          fontWeight: 700,
        }}
      >
        GG COIN ICO
      </text>
      <text
        transform="translate(11.661 22.564)"
        style={{
          fontSize: '2.8462860584259033px',
          fill: '#fff',
          fontFamily: 'Asap, sans-serif',
          fontWeight: 700,
        }}
        className="stamp-hover"
      >
        2018
      </text>
      <text
        transform="translate(6 7.98)"
        style={{
          fontSize: '4.07611px',
          fill: '#fff',
          fontFamily: 'Asap, sans-serif',
          fontWeight: 700,
          letterSpacing: '0.016092501217938326em',
        }}
        className="stamp-hover"
      >
        LEGALLY
        <tspan style={{ letterSpacing: '0.015896251203085417em' }}>
          <tspan x="-1.654" y="4.976">
            APPROVED
          </tspan>
        </tspan>
      </text>
    </g>
  </svg>
);

export default LegallyApproved;
