import * as React from 'react';
// import LegallyApproved from '../svgLegallyApproved/svgLegallyApproved';

const Stach = require('../../assets/img/logo_stach.png');
const Finma = require('../../assets/img/logo_finma.png');

class LegalContent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="legal-content" style={{ color: '#333' }}>
        <h2
          style={{
            fontSize: '16px',
            color: 'rgb(243, 159, 255)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0px',
            fontFamily: 'brandon_grotesquebold, sans-serif',
          }}
        >
          {this.props.lang.ggcIcoLegallyApproved}
        </h2>
        <p>{this.props.lang.theGingrProjectAndAllItsLegal}</p>
        <div style={{ display: 'block', margin: '3em 0' }} />
        <h2
          style={{
            fontSize: '16px',
            color: 'rgb(243, 159, 255)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0px',
            fontFamily: 'brandon_grotesquebold, sans-serif',
          }}
        >
          {this.props.lang.finmaApprovalPending}
        </h2>
        <p>{this.props.lang.asYouAreProbablyAware}</p>
        <p>{this.props.lang.havingSaidThatWeHaveNow}</p>
        <div style={{ display: 'block', margin: '3em 0' }} />
        <div className="flex-row" style={{ alignItems: 'flex-start' }}>
          <div
            className="flex-column"
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flex: '1 1 50%',
            }}
          >
            <img src={Stach} alt="Stach Rechtsanwälte logo" />
            <h2
              style={{
                fontSize: '18px',
                color: 'rgb(243, 159, 255)',
                letterSpacing: '0.05em',
                textTransform: 'capitalize',
                marginBottom: '0px',
              }}
            >
              Stach Rechstanwalte AG
            </h2>
            <p>
              Michael Kummer, Partner
              <br />
              lic. iur. HSG LL.M., M.B.L.-HSG
              <br />
              Rechtsanwalt, Notar
            </p>
            <p>
              Poststrasse 17
              <br />
              9001 St.Gallen
            </p>
            <p>
              T +41 71 278 78 28
              <br />F +41 71 278 78 29
            </p>
            <p>
              Kreuzbühlstrasse 20
              <br />
              CH–8008 Zürich
            </p>
            <p>T +41 58 332 27 27</p>
            <p>
              Postfach 1944 | Switzerland
              <br />
              kummer@stach.ch | www.stach.ch
            </p>
          </div>
          <div
            className="flex-column"
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flex: '1 1 50%',
            }}
          >
            <img src={Finma} alt="Swiss Financial Market - Finma logo" />
            <h2
              style={{
                fontSize: '16px',
                color: 'rgb(243, 159, 255)',
                letterSpacing: '0.05em',
                marginBottom: '0px',
              }}
            >
              FINMA
            </h2>
            <p>
              Swiss Financial Market
              <br />
              Supervisory Authority
            </p>
            <p>
              Laupenstrasse 27
              <br />
              CH-3003 Bern
            </p>
            <p>
              T +41 31 327 91 00
              <br />F +41 31 327 91 01
            </p>
            <p>info@finma.ch | www.finma.ch</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LegalContent;
