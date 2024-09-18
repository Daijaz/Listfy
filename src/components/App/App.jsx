// App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utils/Spotify';
import Swal from 'sweetalert2';
import '../../styles/index.css'; // Asegúrate de importar el archivo CSS

const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
 
  useEffect(() => {
    const token = Spotify.getAccessToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const handleSearch = (tracks) => {
    setSearchResults(tracks);
  };

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return; 
    }
    setPlaylistTracks([...playlistTracks, track]);

    // Mostrar alerta con SweetAlert2 al agregar una canción con fondo negro
    Swal.fire({
      title: '¡Canción agregada!',
      text: `"${track.name}" ha sido agregada a tu playlist.`,
      icon: 'success',
      customClass: {
        popup: 'black-swal', // Clase CSS personalizada
      },
      timer: 4000
    });
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));

    // Mostrar alerta con SweetAlert2 al eliminar una canción con fondo negro
    Swal.fire({
      title: 'Canción eliminada',
      text: `"${track.name}" ha sido eliminada de tu playlist.`,
      icon: 'warning',
      customClass: {
        popup: 'black-swal', // Clase CSS personalizada
      },
      timer: 4000
    });
  };

  if (!accessToken) {
    return (
      <section className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-6xl font-extrabold text-green-500 mb-6 animate-title">
          Playlistfy
        </h1>
        <article className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6 mt-20">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a Playlistfy</h2>
          <p className="text-lg mb-4">
            Esta aplicación te permite crear una playlist personalizada agregando diferentes canciones 
            de los resultados de tus búsquedas en Spotify. Para comenzar, primero debes iniciar sesión 
            en tu cuenta de Spotify.
          </p>
          <p className="text-lg">
            Haz clic en el botón de abajo para iniciar sesión y disfrutar de todas las funciones de Playlistfy.
          </p>
        </article>
        <button
          className="mt-20 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105" 
          onClick={Spotify.redirectToSpotify}
        >
          Ingresa con tu cuenta de spotify
        </button>
      </section>
    );
  }

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 relative z-10">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-green-500 text-center mb-6 animate-title">
        Playlistfy
      </h1>
      <SearchBar accessToken={accessToken} onSearch={handleSearch} />
      <div className="flex flex-col md:flex-row justify-between mt-10 gap-6 md:gap-12">
        <SearchResults tracks={searchResults} onAdd={addTrack} />
        <Playlist playlistTracks={playlistTracks} onRemove={removeTrack} />
      </div>
    </div>
  );
};

export default App;
