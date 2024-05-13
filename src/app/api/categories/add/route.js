import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
import moment from 'moment';
import { assoc } from 'ramda';
import { ObjectId } from 'mongodb';
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

const getCleanPerson = (person) => {
  return {
    id: person.username,
    name: person.name,
    image: person.image,
    href: '/music/artist/' + person.id,
  };
};

const getPersonInfo = async (data) => {
  try {
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('companies');
    if (data) {
      const persons = collection.find({ id: { $in: data } }).toArray();
      return persons.map((p) => getCleanPerson(p));
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
    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('categories');

    const data = await req.json();
    //console.log('inserting data', data);

    const entity = {
      id: toKebabCase(data.name),
      approved: false,
      name: data.name,
      userGenerated: true,
      createdAt: moment().format(),
      createdBy: new ObjectId(data.createdBy),
    };

    const result = await collection.insertOne(entity);
    //console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
    );

    return NextResponse.json(
      {
        message: 'Inserted song successfully',
        data: assoc('name', entity.name, result),
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
