// Playlist.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import Tracklist from '../Tracklist/Tracklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importar FontAwesomeIcon
import { faEdit } from '@fortawesome/free-solid-svg-icons'; // Importar el ícono de lápiz
import Spotify from '../../utils/Spotify'; // Importar el módulo Spotify
import '../../styles/index.css'; // Asegúrate de importar el archivo CSS

const Playlist = ({playlistTracks, onRemove, resetPlaylist, resetSearch}) => {
  const [playlistName, setPlaylistName] = useState('Mi Playlist'); // Estado para el nombre de la playlist
  const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre edición y vista

  // Maneja el cambio de nombre de la playlist
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  // Activa el modo de edición
  const startEditing = () => {
    setIsEditing(true);
  };

  // Desactiva el modo de edición y guarda el nuevo nombre
  const saveName = () => {
    setIsEditing(false);
  };

  // Método para guardar la playlist en Spotify
  const handleSave = () => {
    // Verificar si la playlist está vacía
    if (playlistTracks.length === 0) {
      // Mostrar alerta indicando que la playlist está vacía
      Swal.fire({
        title: 'No se puede guardar la playlist',
        text: 'Tu playlist no tiene ninguna canción. Agrega canciones antes de guardar.',
        icon: 'error',
        customClass: {
          popup: 'black-swal',
        },
        confirmButtonColor: '#d33',
      });
      return; // Salir de la función si la playlist está vacía
    }

    // Guardar la playlist en Spotify
    Spotify.savePlaylist(playlistName, playlistTracks.map(track => track.uri))
      .then(() => {
        // Mostrar alerta de éxito usando SweetAlert2
        Swal.fire({
          title: '¡Éxito!',
          text: `La playlist ${playlistName} ha sido guardada en Spotify.`,
          icon: 'success',
          customClass: {
            popup: 'black-swal', // Clase CSS personalizada
          },
          confirmButtonColor: '#3085d6',
        }).then(() => {
          // Limpiar el estado de la playlist sin recargar la página
          setPlaylistName('Mi Playlist');
          // Aquí es donde puedes limpiar el estado de las pistas si quieres:
          resetPlaylist();
          resetSearch();
        });
      })
      .catch(error => {
        console.error('Error al guardar la playlist:', error);
      });
  };

  return (
    <div className="w-full md:w-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg mt-4 md:mt-0 overflow-y-auto max-h-96">
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Si está en modo de edición, muestra el campo input y el botón "Guardar" */}
        {isEditing ? (
          <>
            <input
              type="text"
              value={playlistName}
              onChange={handleNameChange}
              className="w-full p-2 text-xl bg-gray-700 text-white rounded mb-2 sm:mb-0"
              autoFocus
            />
            <button
              onClick={saveName} // Al hacer clic, se guarda el nombre
              className="ml-0 sm:ml-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Guardar
            </button>
          </>
        ) : (
          // Si no está en modo de edición, muestra el nombre como texto y el botón de lápiz
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-0">{playlistName}</h2>
            <button
              onClick={startEditing} // Al hacer clic, activa el modo de edición
              className="ml-0 sm:ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={faEdit} /> {/* Ícono de lápiz */}
            </button>
          </>
        )}
      </div>
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button
        className="mt-4 w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleSave} // Usar la función handleSave
      >
        Guardar en Spotify
      </button>
    </div>
  );
};

export default Playlist;
