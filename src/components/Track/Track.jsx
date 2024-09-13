// Track.jsx
import React from 'react';

const Track = ({ track }) => {
  return (
    <div className="p-4 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600">
      <span>{track.name} by {track.artist} - {track.album}</span>
    </div>
  );
};

export default Track;
