import * as React from 'react';

import './TeamItem.css';

class TeamItems {
  id: number;
  img: string;
  flag: string;
  name: string;
  role: string;
  description?: string;
  onClick: (e: any) => void;
}

class TeamItem extends React.Component<TeamItems> {
  render() {
    return (
      <div className={'team-item id-' + this.props.id}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginBottom: '24px',
          }}
        >
          <img
            src={this.props.img}
            style={{ borderRadius: '50%', width: '159px', height: '159px' }}
            onClick={this.props.onClick}
          />
          <img src={this.props.flag} />
        </div>
        <a
          href="#team-all"
          style={{
            color: '#F39FFF',
            fontSize: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
          onClick={this.props.onClick}
        >
          {this.props.name}
        </a>
        <p
          style={{
            marginTop: '0.5em',
            fontSize: '13px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {this.props.role}
        </p>
      </div>
    );
  }
}

export default TeamItem;
