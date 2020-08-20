import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="135" cy="130" r="130" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="80" />
      <rect x="0" y="415" rx="6" ry="6" width="90" height="30" />
      <rect x="126" y="400" rx="20" ry="20" width="151" height="44" />
      <rect x="0" y="275" rx="6" ry="6" width="280" height="25" />
    </ContentLoader>
  );
};

export default LoadingBlock;
