// CLIENT_ID = 'f28d5216d2ff4152abe93aba6c2692ab';
// CLIENT_SECRET = 'f6a17d02d6c74c28b617a8b99fe5b8f1';
const scopesArr = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-recently-played',
  'user-top-read',
  'user-library-read'
];
const scopes = scopesArr.join(' ');
const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=f28d5216d2ff4152abe93aba6c2692ab${
  scopes ? `&scope=${encodeURIComponent(scopes)}` : ''
}&redirect_uri=${encodeURIComponent(
  'https://auth.expo.io/@ricardonava/song-geek/'
)}`;

export default authUrl;