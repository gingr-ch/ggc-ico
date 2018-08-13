import * as React from 'react';

import './GgCard.css';
// import Cycle from '../../components/svgCycle/svgCycle';

// const gingr = require(process.env.REACT_APP_MEDIA_URL + 'gingr_necklace.png');

interface CardProps {
  image?: string;
  title?: string;
  content?: string;
}

class GgCard extends React.Component<CardProps> {
  render() {
    return (
      <div
        className="ggc-card flex-column"
        style={{ alignItems: 'flex-start' }}
      >
        <div className="ggc-card__image">
          {this.props.image && <img src={this.props.image} alt="" />}
        </div>
        {this.props.title && (
          <div className="ggc-card__title">{this.props.title}</div>
        )}
        {this.props.content && <div>{this.props.content}</div>}
      </div>
    );
  }
}

export default GgCard;
