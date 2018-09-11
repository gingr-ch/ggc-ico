import * as React from 'react';
import styled from 'styled-components';
import { goToAnchor } from 'react-scrollable-anchor';

const NavContainer = styled.div`
  position: fixed;
  right: 0;
  top: 40%;
  width: 40px;
  overflow-x: visible;
  z-index: 8;
`;

const NavDot = styled.div`
  background: transparent;
  border-radius: 50%;
  border: 2px solid white;
  margin-bottom: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 2px;
    left: 2px;
    border: 6px solid white;
    border-radius: 50%;
    transform: scale3d(0, 0, 0);
    transition: transform 0.2s ease-in;
  }

  &:hover::before {
    transform: scale3d(1, 1, 1);
  }

  .title {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transform: translate3d(-75px, -1px, 0);
    transform-origin: right;
    transition: transform 0.2s ease-in, opacity 0.2s ease 0.1s;
    min-width: 90px;
    width: 100%;
    text-align: right;
    z-index: -1;
    text-transform: uppercase;
  }

  &:hover .title {
    transform: translate3d(-100px, -1px, 0);
    opacity: 1;
    visibility: visible;
  }
`;

const click = (event: any, item: any) => {
  event.preventDefault();
  goToAnchor(item);
};

class DotNav extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
  }

  render() {
    const items = [
      { id: 1, name: this.props.lang.download, anchor: 'download' },
      { id: 2, name: this.props.lang.platform, anchor: 'what-is-gingr' },
      { id: 3, name: this.props.lang.ggCoin, anchor: 'blockchain' },
      { id: 4, name: this.props.lang.icoDetails, anchor: 'ico-details' },
      { id: 5, name: this.props.lang.roadmap, anchor: 'roadmap' },
      { id: 6, name: this.props.lang.team, anchor: 'team' },
      { id: 7, name: this.props.lang.contact, anchor: 'contact' },
    ];

    return (
      <NavContainer>
        {items.map((item: any) => (
          <NavDot onClick={e => click(e, item.anchor)} key={item.id.toString()}>
            <div className="title">{item.name}</div>
          </NavDot>
        ))}
      </NavContainer>
    );
  }
}

export default DotNav;
