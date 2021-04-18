import React from 'react';

const Photo = ({ urls: { regular }, alt_description }) => {
  return (
    <article classname="photo">
      <img src={regular} alt={alt_description} />
    </article>
  );
};

export default Photo;
