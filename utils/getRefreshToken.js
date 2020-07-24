import CREDS_B64 from './secrets';

export default async function getRefreshToken(refreshToken) {
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${CREDS_B64}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=refresh_token&refresh_token=${refreshToken}`
  });
  const responseJson = await tokenResponse.json();

  return responseJson;
}
