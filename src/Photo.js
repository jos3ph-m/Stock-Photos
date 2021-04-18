import React from 'react';

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article classname="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <h4>{name}</h4>
      </div>
    </article>
  );
};

export default Photo;
