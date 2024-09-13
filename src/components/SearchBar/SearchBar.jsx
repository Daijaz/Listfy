// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para capturar el input

  const searchSpotify = async () => {
    const accessToken = 'TU_ACCESS_TOKEN'; // Reemplaza con tu token de Spotify

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Autenticación con token
          },
        }
      );

      const data = await response.json(); // Convertir la respuesta en JSON
      const tracks = data.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));

      onSearch(tracks); // Llamamos a la función que nos pasó App.jsx con los tracks
    } catch (error) {
      console.error('Error fetching data from Spotify:', error);
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="w-full p-2 rounded-lg text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Capturamos el input del usuario
        placeholder="Enter A Song Title"
      />
      <button
        className="ml-2 bg-green-500 text-white p-2 rounded-lg"
        onClick={searchSpotify} // Llamamos a searchSpotify cuando se hace clic en el botón
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
