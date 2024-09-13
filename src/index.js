// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './components/App/App'; // Importamos el componente principal de la aplicación

const Root = () => {
  return (
    <div className="app-container"> {/* Este contenedor abarca toda la aplicación */}
      <video
        id="backgroundVideo" // El video de fondo
        autoPlay // Reproduce automáticamente
        loop // Se repite en bucle
        muted // Elimina el sonido del video
      >
        <source src="/videos/waves.mp4" type="video/mp4" /> {/* Fuente del video */}
      </video>
      <App /> {/* Este es el componente principal donde está el resto del contenido */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root') // Insertamos la aplicación dentro del div con id 'root'
);
