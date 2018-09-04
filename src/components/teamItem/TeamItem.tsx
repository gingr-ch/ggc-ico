import * as React from 'react';
import Img from 'react-image';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import OnVisible from 'react-on-visible';
import styled from 'styled-components';

import './TeamItem.css';

class TeamItems {
  id: number;
  img: string;
  thumb: string;
  flag: string;
  name: string;
  role: string;
  description?: string;
  onClick: (e: any) => void;
  lang: object;
}

const FlagImg = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
`;

class TeamItem extends React.Component<any, TeamItems> {
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
            position: 'relative',
          }}
        >
          <OnVisible>
            <div
              className="team-item__image"
              data-about={this.props.lang.aboutMe}
            >
              <Img
                src={this.props.img}
                style={{ borderRadius: '50%', width: '159px', height: '159px' }}
                onClick={this.props.onClick}
                loader={
                  <Img
                    src={this.props.thumb}
                    style={{
                      borderRadius: '50%',
                      width: '159px',
                      height: '159px',
                      filter: 'blur(10px)',
                    }}
                  />
                }
                container={children => {
                  return (
                    <ReactCSSTransitionReplace
                      transitionName="fade-wait"
                      changeWidth={false}
                    >
                      {children}
                    </ReactCSSTransitionReplace>
                  );
                }}
              />
            </div>
          </OnVisible>
          <FlagImg src={this.props.flag} />
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
