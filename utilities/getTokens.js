import { encode as btoa } from 'base-64';
import { CLIENT_ID, CLIENT_SECRET, getAuthorizationCode } from './getAuthCode';

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

  return responseJson;
};

export default getTokens;
