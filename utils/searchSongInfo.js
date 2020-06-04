import pitchToKey from './pitchToKey';

export default async ({ token, id }) => {
  const uri = `https://api.spotify.com/v1/audio-features/${id}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  });
  const data = await res.json();
  const key = pitchToKey(data);
  const songInfo = { ...data, key };
  return songInfo;
};
