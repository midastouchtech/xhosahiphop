const updateAlbumArtists = async (db, albumId, artists) => {
  const collection = db.collection('albums');
  console.log('albumId', albumId, 'artists', artists);
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { artists: { $each: artists } } }
  );
  console.log(
    `${result.modifiedCount} document(s) was/were updated with the _id: ${albumId}`
  );
};

const updateAlbumComposers = async (db, albumId, composers) => {
  const collection = db.collection('albums');
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { composers: { $each: composers } } }
  );
  console.log(
    `${result.modifiedCount} document(s) was/were updated with the _id: ${albumId}`
  );
};

const updateAlbumLyricists = async (db, albumId, lyricists) => {
  const collection = db.collection('albums');
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { lyricists: { $each: lyricists } } }
  );
  console.log(
    `${result.modifiedCount} document(s) was/were updated with the _id: ${albumId}`
  );
};

const updateAlbumDirectors = async (db, albumId, directors) => {
  const collection = db.collection('albums');
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { directors: { $each: directors } } }
  );
  console.log(
    `${result.modifiedCount} document(s) was/were updated with the _id: ${albumId}`
  );
};

const updateAlbumCategories = async (db, albumId, categories) => {
  const collection = db.collection('albums');
  const result = await collection.updateOne(
    { id: albumId },
    { $addToSet: { categories: { $each: categories } } }
  );
  console.log(
    `${result.modifiedCount} document(s) was/were updated with the _id: ${albumId}`
  );
};

export {
  updateAlbumArtists,
  updateAlbumComposers,
  updateAlbumLyricists,
  updateAlbumDirectors,
  updateAlbumCategories,
};
