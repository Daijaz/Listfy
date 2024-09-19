# 🎵 Listfy

Listfy es una aplicación web que permite a los usuarios crear listas de reproducción personalizadas utilizando canciones de Spotify. A través de la integración con la API de Spotify, puedes buscar canciones, agregar tus favoritas a una playlist, y guardarla directamente en tu cuenta de Spotify.

## 🌟 Características

- **Búsqueda de Canciones**: Busca canciones directamente desde el catálogo de Spotify.
- **Agregar a Playlist**: Añade tus canciones favoritas a una lista de reproducción personalizada.
- **Guardar en Spotify**: Guarda tus listas de reproducción personalizadas directamente en tu cuenta de Spotify.
- **Edición de Playlists**: Cambia el nombre de tu playlist antes de guardarla.
- **Responsive**: Diseño adaptable para que funcione en dispositivos móviles y de escritorio.

## 🖼️ Vista Previa

![Listfy Preview](https://listfynow.netlify.app/wallpaper.png)

## 🚀 Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Spotify Web API**: Para la búsqueda de canciones y la creación de playlists.
- **SweetAlert2**: Para mostrar alertas elegantes e interactivas.
- **Tailwind CSS**: Para un diseño rápido y responsivo.
- **Netlify**: Despliegue y hosting del proyecto.
- **FontAwesome**: Iconos para la interfaz de usuario.

## 📦 Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/listfy.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd listfy
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Configura el archivo `Spotify.js` con tu propio Client ID y Redirect URI obtenidos de [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
5. Inicia la aplicación:
    ```bash
    npm start
    ```

La aplicación se ejecutará en `http://localhost:3000`.

## 🛠️ Configuración

Antes de ejecutar la aplicación, asegúrate de configurar tu aplicación en el [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/):

1. Crea una nueva aplicación y obtén el `Client ID`.
2. Configura las URIs de redirección (Redirect URIs) en el dashboard de Spotify:
   - Ejemplo: `http://localhost:3000/callback` para desarrollo local.
   - Ejemplo: `https://listfynow.netlify.app/callback` para producción.
3. Actualiza el archivo `src/utils/Spotify.js` con tu `clientId` y `redirectUri` configurados.

## 📄 Uso

1. Ingresa a la aplicación y haz clic en "Ingresar con tu cuenta de Spotify".
2. Busca tus canciones favoritas usando la barra de búsqueda.
3. Agrega canciones a tu playlist haciendo clic en el botón de `+`.
4. Edita el nombre de tu playlist.
5. Haz clic en "Guardar en Spotify" para guardar la playlist en tu cuenta de Spotify.

## 🖥️ Despliegue

Listfy está desplegado en [Netlify](https://www.netlify.com/). Puedes acceder a la aplicación en la siguiente URL:

[https://listfynow.netlify.app](https://listfynow.netlify.app)

## 🎨 Diseño

- **Tema Oscuro**: Listfy presenta un tema oscuro elegante, combinado con alertas interactivas para una mejor experiencia de usuario.
- **Responsive Design**: Adaptado para una visualización perfecta tanto en dispositivos móviles como de escritorio.

## 📂 Estructura de Archivos

```plaintext
listfy/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── wallpaper.png
│
├── src/
│   ├── components/
│   │   ├── SearchBar/
│   │   ├── SearchResults/
│   │   ├── Playlist/
│   │   ├── Tracklist/
│   │   └── Track/
│   │
│   ├── utils/
│   │   └── Spotify.js
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── index.js
│
└── README.md

## 💛 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`).
4. Sube tus cambios (`git push origin feature-nueva-caracteristica`).
5. Abre un Pull Request.

## 📋 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Autor**: [Miguel Osorio](https://github.com/Daijaz)
- **Correo**: [miguelosorio1904@gmail.com]
- **LinkedIn**: [Tu LinkedIn](https://www.linkedin.com/in/miguel-%C3%A1ngel-osorio-londo%C3%B1o-940218206/)

## 🌐 Enlaces

- [Aplicación en Producción](https://listfynow.netlify.app)
- [Repositorio en GitHub](https://github.com/tuusuario/listfy)
- [Documentación de la API de Spotify](https://developer.spotify.com/documentation/web-api/)
