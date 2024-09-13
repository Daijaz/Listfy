// Playlist.jsx
import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = () => {
  const mockPlaylist = [
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
  ];

  return (
    <div className="w-full md:w-1/2 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Your Playlist</h2>
      <div className="space-y-4">
        {mockPlaylist.map((track) => (
          <div key={track.id} className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
            <span>{track.name} by {track.artist}</span>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist;
