import React from 'react';
import SOCIAL_MEDIA from '../data/socialMedia';

const Media = props => {
  const { name, icon, link } = props.media;

  return(
    <div style={{display: 'inline-block', width: 100, margin: 5}}>
      <a href={link}>
        <img  src={icon} alt={name}style={{ width: 50}} />
      </a>
    </div>
  )
}

const SocialMedia = () => (
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

export default SocialMedia;
