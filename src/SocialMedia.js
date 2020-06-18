import React, { Component } from 'react';
import SOCIAL_MEDIA from './data/socialMedia';

class Media extends Component {
  render() {
    const { name, icon, link } = this.props.media;

    return(
      <div style={{display: 'inline-block', width: 100, margin: 5}}>
        <a href={link}>
          <img  src={icon} alt={name}style={{ width: 50}} />
        </a>
      </div>
    )
  }
}

class SocialMedia extends Component {
  render() {
    return(
      <div>
        <h2>Follow Me</h2>
        {
          SOCIAL_MEDIA.map(MEDIA => {
            return (
              <Media key={MEDIA.id} media={MEDIA} />
            );
          })
        }
      </div>
    )
  }
}

export default SocialMedia;
