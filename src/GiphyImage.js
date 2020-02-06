import React from 'react';
import './GiphyImage.css';


function GiphyImage({
  height,
  width,
  url,
  title
}) {

  const isPortrait = height >= width;
  const imageClass = isPortrait ? 'tall' : 'wide';
        
  return (
    <div className="giphy-image">
      <img
        className={imageClass}
        src={url}
        alt={title}
      />      
    </div>
  );
}

export default GiphyImage;
