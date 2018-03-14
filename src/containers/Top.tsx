import * as React from 'react';
import ReactPlayer from 'react-player';

const chart = require('../assets/img/chart.png');

class Top extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%', position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            flex: '1 1 50%',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h1>"REVOLUTIONIZING THE OLDEST INDUSTRY IN THE WORLD"</h1>
          <h3>PRIVATE SALE NOW</h3>
          <h3>
            70% DISCOUNT<br />
            1 GGC = 0.03 EUR
                    </h3>
          <button>Buy coins now</button>
          <img src={chart} alt="Chart" style={{ maxWidth: '400px' }} />
        </div>
        <div style={{ flex: '1 1 50%', background: 'transparent' }}>
          some content
        </div>
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'red', zIndex: 0 }}>
          <ReactPlayer
            url="https://video.wixstatic.com/video/2eea42_6742459018df47bda3b58cd0970506d1/720p/mp4/file.mp4"
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            controls={true}
            loop={false}
          />
        </div>
      </div>
    );
  }
}

export default Top;
