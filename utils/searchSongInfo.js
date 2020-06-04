export default async ({ token, id }) => {
  const uri = `https://api.spotify.com/v1/audio-features/${id}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  });
  const json = await res.json();
  const songInfo = json;
  return songInfo;
};
