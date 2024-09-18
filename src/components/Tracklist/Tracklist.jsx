// Tracklist.jsx
import React from 'react';
import Track from '../Track/Track';

const Tracklist = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <div className="mt-10">
      {tracks.map(track => (
        <Track 
          key={track.id} 
          track={track} 
          onAdd={onAdd} 
          onRemove={onRemove} 
          isRemoval={isRemoval} // Pasamos `isRemoval` para indicar si es para eliminar

        />
      ))}
    </div>
  );
};

export default Tracklist;
