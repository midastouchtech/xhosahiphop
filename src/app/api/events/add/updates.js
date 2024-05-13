const updateAlbumArtists = async (db, albumId, artists) => {
  const collection = db.collection('albums');
  //console.log('albumId', albumId, 'artists', artists);
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { artists: { $each: artists } } }
  );
};

const updateAlbumComposers = async (db, albumId, composers) => {
  const collection = db.collection('albums');
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { composers: { $each: composers } } }
  );
};

const updateAlbumLyricists = async (db, albumId, lyricists) => {
  const collection = db.collection('albums');
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { lyricists: { $each: lyricists } } }
  );
};

const updateAlbumDirectors = async (db, albumId, directors) => {
  const collection = db.collection('albums');
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { directors: { $each: directors } } }
  );
};

const updateAlbumCategories = async (db, albumId, categories) => {
  const collection = db.collection('albums');
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { categories: { $each: categories } } }
  );
};

export {
  updateAlbumArtists,
  updateAlbumComposers,
  updateAlbumLyricists,
  updateAlbumDirectors,
  updateAlbumCategories,
};
