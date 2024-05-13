import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
import moment from 'moment';
import { ObjectId } from 'mongodb';
import {
  updateAlbumArtists,
  updateAlbumComposers,
  updateAlbumLyricists,
  updateAlbumDirectors,
  updateAlbumCategories,
} from './updates';

const client = await clientPromise;

const getRandomString = (length) => {
  const randomChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

const getCleanEntity = (entity, type) => {
  const entityId = entity.id || entity.username;
  return {
    id: entityId,
    name: entity.stageName || entity.name || 'No Name',
    image: entity.image,
    href: `/music/${type}/${entityId}`,
  };
};

const getPersonInfo = async (data, collectionName) => {
  try {
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection(collectionName);
    const entityName = collectionName === 'users' ? 'artist' : 'genre';
    if (data) {
      const persons = await collection
        .find({ _id: { $in: data.map((i) => new ObjectId(i.value)) } })
        .toArray();
      //console.log('persons', persons);
      return persons.map((p) => getCleanEntity(p, entityName));
    }
    return [];
  } catch (e) {
    //console.log(e);
    return [];
  }
};

const getAlbumInfo = async (data) => {
  try {
    //console.log('data', data);
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('albums');
    if (data) {
      const album = await collection.findOne({ _id: new ObjectId(data.value) });
      //console.log('album', album);
      return getCleanEntity(album, 'album');
    }
    return {};
  } catch (e) {
    //console.log(e);
  }
};

const createSongId = (name) => {
  const randomString = getRandomString(6);
  return name.replace(/\s+/g, '-').toLowerCase() + '-' + randomString;
};

const buildCloudinaryPreviewUrl = (src) => {
  const { id, duration, format, version, resourceType, uploadType } = src;
  const thirtyPercentOfDuration = duration * 0.3;
  const sixtyPercentOfDuration = duration * 0.6;
  // the duration of the preview must start where the song is at 30% and end at 60%
  const startOffset = Math.round(thirtyPercentOfDuration);
  const endOffset = Math.round(sixtyPercentOfDuration);

  const previewUrl = `https://res.cloudinary.com/namoota/${resourceType}/${uploadType}/eo_${endOffset},so_${startOffset}/v${version}/${id}.${format}`;
  return previewUrl;
};

export async function POST(req) {
  try {
    //console.log('req.method', req.method, 'req.query', req.query);
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('songs');
    const fileCollection = db.collection('files');
    const data = await req.json();
    //console.log('inserting data', data);
    const songId = createSongId(data.title || data.name);
    const songEntity = {
      id: songId,
      title: data.name || data.title || '',
      album: await getAlbumInfo(data.album),
      type: 'song',
      cover: data.cover || '',
      date: data.release || moment().format('YYYY-MM-DD'),
      playbackUrl: data.src.fileUrl || '',
      preview: {
        url: buildCloudinaryPreviewUrl(data.src),
        duration: data.src.duration * 0.3,
      },
      company: data.label || '',
      thumb: {
        url: data.cover.fileUrl || '',
        width: data.cover.width || 0,
        height: data.cover.height || 0,
      },
      rating: 0,
      duration: data.src.duration || 0, // in seconds
      played: 0,
      favorites: 0,
      downloads: 0,
      lyrics: data.lyrics || '',
      href: '/music/song/' + songId,

      //TODO: getPersonInfo when the persn does not exist in the db

      artists: await getPersonInfo(data.artists, 'users'),
      composers: await getPersonInfo(data.composers, 'users'),
      lyricists: await getPersonInfo(data.lyricists, 'users'),
      directors: await getPersonInfo(data.directors, 'users'),
      categories: await getPersonInfo(data.categories, 'categories'),
      premium: data.isPaid ? true : false,
      price: data.price || 0,
      company: data['record-label']?.label || '',
      createdAt: new Date(),
      createdBy: new ObjectId(data.userId),
    };

    const songFileEntity = {
      songId,
      songName: data.name || '',
      ...data.src,
    };

    const coverFileEntity = {
      songId,
      songName: data.name || '',
      ...data.cover,
    };

    //console.log(songEntity);

    const result = await collection.insertOne(songEntity);

    fileCollection.insertOne(songFileEntity);
    fileCollection.insertOne(coverFileEntity);

    updateAlbumArtists(db, songEntity.album.id, songEntity.artists);
    updateAlbumComposers(db, songEntity.album.id, songEntity.composers);
    updateAlbumLyricists(db, songEntity.album.id, songEntity.lyricists);
    updateAlbumDirectors(db, songEntity.album.id, songEntity.directors);
    updateAlbumCategories(db, songEntity.album.id, songEntity.categories);

    return NextResponse.json(
      {
        message: 'Inserted song successfully',
        data: result,
      },
      { status: SUCCESSFUL }
    );
  } catch (e) {
    //console.log(e);
    return new Response({
      message: 'Something went wrong',
      error: e,
      status: INVALIDATE,
    });
  }
}
