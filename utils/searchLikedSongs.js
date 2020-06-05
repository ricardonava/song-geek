export default async ({ token, LIMIT, offset }) => {
  const uri = `https://api.spotify.com/v1/me/tracks?offset=${offset}&limit=${LIMIT}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  });
  const json = await res.json();

  const songs = json.items.map((item) => ({
    id: item.track.id,
    name: item.track.name,
    artists: item.track.artists,
    cover: item.track.album.images,
    releaseDate: item.track.album.release_date
  }));
  return songs;
};
