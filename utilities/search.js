export default async ({ token }) => {
  const uri = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=50';
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  // console.log(res);
  const json = await res.json();
  // console.log(json.items[0].track.album);
  const songs = json.items.map((item) => ({
    id: item.track.id,
    name: item.track.name,
    artists: item.track.artists,
    cover: item.track.album.images
  }));
  return songs;
};
