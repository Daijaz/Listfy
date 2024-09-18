// Track.jsx
import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importar iconos de React Icons

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const renderAction = () => {
    if (isRemoval) {
      return (
        <button
          className="ml-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
          onClick={() => onRemove(track)}
        >
          <FaMinus /> {/* Icono de eliminar */}
        </button>
      );
    }
    return (
      <button
        className="ml-4 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
        onClick={() => onAdd(track)}
      >
        <FaPlus /> {/* Icono de agregar */}
      </button>
    );
  };

  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-md flex justify-between items-center mt-2">
      <span>{track.name} by {track.artist} - {track.album}</span>
      {renderAction()}
    </div>
  );
};

export default Track;
