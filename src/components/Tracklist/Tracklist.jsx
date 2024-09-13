// Tracklist.jsx
import React from 'react';
import Track from '../Track/Track';

const Tracklist = ({ tracks }) => {
  return (
    <div className="space-y-4">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default Tracklist;
