import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
import moment from 'moment';
import { assoc } from 'ramda';
import { ObjectId } from 'mongodb';

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
const createSongId = (name) => {
  const randomString = getRandomString(6);
  return name.replace(/\s+/g, '-').toLowerCase() + '-' + randomString;
};

const buildCloudinaryPreviewUrl = (src) => {
  const { id, duration, format, version, resourceType, uploadType } = src;
  const thirtyPercentOfDuration = duration * 0.3;
  const sixtyPercentOfDuration = duration * 0.6;
  // the duration of the preview must start where the song is at 30% and end at 60%
  const startOffset = thirtyPercentOfDuration;
  const endOffset = sixtyPercentOfDuration;

  const previewUrl = `https://res.cloudinary.com/namoota/${resourceType}/${uploadType}/eo_${startOffset},so_${endOffset}/v${version}/${id}.${format}`;
  return previewUrl;
};

const toKebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

export async function POST(req) {
  try {
    //console.log('req.method', req.method, 'req.query', req.query);

    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('albums');

    const data = await req.json();
    //console.log('inserting data', data);
    const songId = createSongId(data.name);
    const entity = {
      id: songId,
      href: '/music/album/' + songId,
      name: data.name,
      cover: data.cover.fileUrl || '',
      thumb: data.cover.fileUrl || '',
      duration: 0,
      release: data.release,
      company: data['record-label'].label,
      artists: await getPersonInfo(data.artists, 'users'),
      composers: await getPersonInfo(data.composers, 'users'),
      lyricists: await getPersonInfo(data.lyricists, 'users'),
      directors: await getPersonInfo(data.directors, 'users'),
      categories: await getPersonInfo(data.categories, 'categories'),
      type: 'album',
      favourites: 0,
      downloads: 0,
      plays: 0,
      rating: 0,
      agreed: false,
      verified: false,
      premium: data.isPaid || false,
      price: data.price || 0,
      createdAt: moment().format(),
      createdBy: new ObjectId(data.createdBy),
    };

    const result = await collection.insertOne(entity);

    return NextResponse.json(
      {
        message: 'Inserted albums successfully',
        data: assoc('stageName', entity.stageName, result),
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
