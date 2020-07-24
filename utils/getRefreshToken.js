import { encode as btoa } from 'base-64';

export default async function getRefreshToken(refreshToken) {
  const credsB64 = btoa(
    `f28d5216d2ff4152abe93aba6c2692ab:f6a17d02d6c74c28b617a8b99fe5b8f1`
  );
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credsB64}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=refresh_token&refresh_token=${refreshToken}`
  });
  const responseJson = await tokenResponse.json();

  return responseJson;
}
