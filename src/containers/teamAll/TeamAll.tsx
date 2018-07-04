import * as React from 'react';

import TeamList from '../../components/teamList/TeamList';

import './TeamAll.css';

const ceoFlag = require('../../assets/img/flags/switzerland.png');

class TeamAll extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--teamAll">
        <div className="gg-content-container flex-row">
          <div
            className="ceo-details"
            style={{
              marginTop: '60px',
              marginBottom: '150px',
              textAlign: 'left',
              width: '100%',
              maxWidth: '638px',
            }}
          >
            <div className="flex-row" style={{ justifyContent: 'flex-start' }}>
              <a
                href=""
                style={{
                  fontSize: '29px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  marginRight: '18px',
                }}
              >
                SERGIO RIGERT
              </a>
              <img src={ceoFlag} alt="" />
            </div>
            <h4
              style={{
                fontWeight: 'normal',
                fontSize: '18px',
                letterSpacing: '0.1em',
                marginTop: '5px',
              }}
            >
              CEO & FOUNDER
            </h4>
            <p style={{ lineHeight: '1.4em', fontSize: '15px' }}>
              Sergio’s dream is to make the world a better place. With a natural
              ability to lead his team and emulate his passion for the future,
              his infectious, funny, honest, and straight forward personality
              attracts top level people who delight in working with him.
            </p>
            <p style={{ lineHeight: '1.4em', fontSize: '15px' }}>
              Sergio has always given 100 per cent to the project. He is not
              afraid to push the boundaries both of himself, his team, and in
              fact the views of the entire world. He constantly questions the
              status quo and is not afraid to challenge it.
            </p>
          </div>
          <TeamList />
        </div>
      </div>
    );
  }
}

export default TeamAll;
