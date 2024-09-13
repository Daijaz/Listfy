// SearchResults.jsx
import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ tracks }) => {
  return (
    <div className="w-full md:w-1/2 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Results</h2>
      <Tracklist tracks={tracks} />
    </div>
  );
};

export default SearchResults;
