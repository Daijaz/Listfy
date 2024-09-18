// Spotify.js
const clientId = 'ce73c4c0bc2e41aaa0666b3290b99b8c'; // Reemplaza con tu Client ID de Spotify
const redirectUri = 'http://localhost:3000/callback'; // Reemplaza con tu URL de redirección
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Verificar si el token ya está almacenado en sessionStorage
    const storedToken = sessionStorage.getItem('spotify_access_token');
    if (storedToken) {
      accessToken = storedToken;
      return accessToken;
    }

    // Verificar si el token de acceso está en la URL
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresInMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Guardar el token en sessionStorage
      sessionStorage.setItem('spotify_access_token', accessToken);

      // Limpiar los parámetros de la URL
      window.setTimeout(() => {
        accessToken = '';
        sessionStorage.removeItem('spotify_access_token'); // Eliminar token de sessionStorage
      }, expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      return null;
    }
  },

  redirectToSpotify() {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  },

  async savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) return;

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    // Obtener el ID del usuario
    try {
      const userResponse = await fetch('https://api.spotify.com/v1/me', { headers });
      const userData = await userResponse.json();
      userId = userData.id;
    } catch (error) {
      console.error('Error fetching user ID:', error);
      return;
    }

    // Crear una nueva playlist
    let playlistId;
    try {
      const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playlistName,
          public: true,
        }),
      });
      const playlistData = await playlistResponse.json();
      playlistId = playlistData.id;
    } catch (error) {
      console.error('Error creating playlist:', error);
      return;
    }

    // Añadir canciones a la playlist
    try {
      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uris: trackUris,
        }),
      });
      console.log('Playlist saved successfully!');
    } catch (error) {
      console.error('Error adding tracks to playlist:', error);
    }
  },
};

export default Spotify;
