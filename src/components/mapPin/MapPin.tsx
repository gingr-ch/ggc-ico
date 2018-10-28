import * as React from 'react';
// import styled from 'styled-components';
import SvgMapPin from '../svgMapPin/SvgMapPin';

interface MapPinProps {
  lat: number;
  lng: number;
}

const MapPin = (props: MapPinProps) => {
  return (
    <div
      style={{
        width: '50.675px',
        height: '64.269px',
        transform: 'translate3d(0, -45px, 0)',
      }}
    >
      <SvgMapPin lat={props.lat} lng={props.lng} />
    </div>
  );
};

export default MapPin;
