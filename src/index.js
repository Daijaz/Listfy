// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; 
import App from './components/App/App'; // Importamos el componente principal de la aplicación

const Root = () => {
  return (
    <div className="app-container"> {/* Este contenedor abarca toda la aplicación */}
      <div className="main-content"> {/* Este contenedor asegura que el contenido principal ocupe el espacio necesario */}
        <App /> {/* Este es el componente principal donde está el resto del contenido */}
      </div>
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Playlistfy. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">
            Esta aplicación utiliza la API de Spotify para proporcionar datos de canciones. No está afiliada con Spotify.
          </p>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root') // Insertamos la aplicación dentro del div con id 'root'
);
