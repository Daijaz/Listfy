// SearchBar.jsx
import React from 'react';

const SearchBar = ({ accessToken, onSearch, searchTerm, setSearchTerm }) => { // Elimina `resetSearch` de aquí
  
  const searchSpotify = async () => {
    if (!accessToken) return;

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Usar el token de acceso
          },
        }
      );

      const data = await response.json();
      const tracks = data.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));

      onSearch(tracks); // Pasar los resultados a App.jsx
    } catch (error) {
      console.error('Error fetching data from Spotify:', error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    searchSpotify(); // Realizar la búsqueda sin limpiar los resultados
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-white"
        placeholder="Ingresa una canción"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-3 bg-green-500 text-white rounded-r-lg rounded-l-lg hover:bg-green-600"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
