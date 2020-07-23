import pitchToKey from './pitchToKey';

export default async ({ token, id }) => {
  const uri = `https://api.spotify.com/v1/audio-features/${id}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  });
  const song = await res.json();

  let { key, mode } = song;
  mode = mode === 0 ? (mode = 'min') : (mode = 'maj');
  const pitch = key;
  key = pitchToKey(pitch);

  const songInfo = { ...song, key, mode };

  return songInfo;
};
