import CREDS_B64 from './secrets';

export default async function geToken(code, redirect) {
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${CREDS_B64}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirect}/`
  });
  const responseJson = await tokenResponse.json();
  return responseJson;
}
