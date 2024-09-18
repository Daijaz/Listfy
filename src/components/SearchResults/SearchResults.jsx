// SearchResults.jsx
import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ tracks, onAdd }) => {
  return (
    <div className="w-full md:w-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg overflow-y-auto max-h-96">
      <h2 className="text-2xl font-bold mb-4">Resultados</h2>
      <Tracklist tracks={tracks} onAdd={onAdd} /> {/* Pasamos `onAdd` a `Tracklist` */}
    </div>
  );
};

export default SearchResults;
