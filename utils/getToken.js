import { encode as btoa } from 'base-64';

export default async function geToken(promptAsync, redirect) {
  const {
    params: { code }
  } = await promptAsync({ useProxy: true, redirect });

  const credsB64 = btoa(
    `f28d5216d2ff4152abe93aba6c2692ab:f6a17d02d6c74c28b617a8b99fe5b8f1`
  );
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credsB64}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirect}/`
  });
  const responseJson = await tokenResponse.json();
  return responseJson;
}
