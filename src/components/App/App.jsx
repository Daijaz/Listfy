import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {
  const [tracks, setTracks] = useState([]); // Estado para almacenar los tracks (vacío inicialmente)

  const handleSearch = (searchResults) => {
    setTracks(searchResults); // Actualizamos el estado de los tracks con los resultados de la búsqueda
  };

  return (
    <div className="container mx-auto mt-10 relative z-10">
      <h1 className="text-6xl font-extrabold text-green-500 text-center mb-6">
        Playlistfy
      </h1>
      {/* Pasamos la función handleSearch a SearchBar */}
      <SearchBar onSearch={handleSearch} />
      <div className="flex justify-between mt-14 gap-12">
        <SearchResults tracks={tracks} />
        <Playlist />
      </div>
    </div>
  );
};

export default App;
