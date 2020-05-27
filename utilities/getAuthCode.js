import * as AuthSession from 'expo-auth-session';
import { encode as btoa } from 'base-64';

const CLIENT_ID = 'f28d5216d2ff4152abe93aba6c2692ab';
const CLIENT_SECRET = 'f6a17d02d6c74c28b617a8b99fe5b8f1';
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

const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}${
  scopes ? `&scope=${encodeURIComponent(scopes)}` : ''
}&redirect_uri=${encodeURIComponent(
  'https://auth.expo.io/@ricardonava/song-geek/'
)}`;

const getAuthorizationCode = async () => {
  const result = await AuthSession.startAsync({
    authUrl
  });
  return result.params.code;
};

const getTokens = async () => {
  const authorizationCode = await getAuthorizationCode();
  const credsB64 = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credsB64}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${'https://auth.expo.io/@ricardonava/song-geek/'}`
  });
  const responseJson = await response.json();

  const {
    access_token: accessToken
    // refresh_token: refreshToken,
    // expires_in: expiresIn
  } = responseJson;
  return accessToken;
};

export default getTokens;
