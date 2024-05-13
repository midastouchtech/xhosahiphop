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
    image: entity.image || entity.cover,
    href: `/music/${type}/${entityId}`,
  };
};

const getPersonInfo = async (data, collectionName) => {
  try {
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection(collectionName);
    const entityName = collectionName === 'users' ? 'artist' : 'event-types';
    if (data) {
      console.log(
        'looking for ids in data',
        data.map((i) => i.value)
      );
      const persons = await collection
        .find({ _id: { $in: data.map((i) => new ObjectId(i.value)) } })
        .toArray();
      console.log('persons', persons);
      return persons.map((p) => getCleanEntity(p, entityName));
    }
    return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

const getVenueInfo = async (data) => {
  try {
    console.log('venue data', data);
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('venues');
    if (data) {
      const venue = await collection.findOne({ _id: new ObjectId(data.value) });
      console.log('venue', venue);
      return getCleanEntity(venue, 'venue');
    }
    return {};
  } catch (e) {
    console.log(e);
  }
};

const getCompanyInfo = async (data) => {
  try {
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('companies');
    if (data) {
      const companies = await collection
        .find({
          _id: { $in: data.map((i) => new ObjectId(i.value)) },
        })
        .toArray();
      return companies.map((c) => getCleanEntity(c, 'company'));
    }
    return [];
  } catch (e) {
    console.log(e);
  }
};

const createeventId = (name) => {
  const randomString = getRandomString(6);
  return name.replace(/\s+/g, '-').toLowerCase() + '-' + randomString;
};

export async function POST(req) {
  try {
    console.log('req.method', req.method, 'req.query', req.query);
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('events');
    const fileCollection = db.collection('files');
    const data = await req.json();
    console.log('inserting event data', data);
    const eventId = createeventId(data.title || data.name);
    const eventEntity = {
      id: eventId,
      title: data.title || data.name,
      venue: await getVenueInfo(data.venue),
      type: 'event',
      cover: data.image || '',
      date: data.release || moment().format('YYYY-MM-DD'),
      promo: data.promo || '',
      company: data.label || '',
      thumb: {
        url: data.image.fileUrl || '',
        width: data.image.width || 0,
        height: data.image.height || 0,
      },
      rating: 0,
      duration: data.duration,
      favorites: 0,
      href: '/music/event/' + eventId,
      artists: await getPersonInfo(data.artists, 'users'),
      organisers: await getPersonInfo(data.people, 'users'),
      premium: data.isPaid ? true : false,
      price: data.price || 0,
      companies: await getCompanyInfo(data.companies),
      createdAt: new Date(),
      createdBy: new ObjectId(data.userId),
      recurring: data.recurring
        ? data.recurring
        : { recurs: false, interval: 0, unit: 'days' },
      hasEnded: false,
      hasStarted: false,
      eventTypes: await getPersonInfo(data['event-type'], 'event-types'),
      alchoholToBeSoldOnPremise: data.alchoholToBeSoldOnPremise || false,
      snacksToBeSoldOnPremise: data.snacksToBeSoldOnPremise || false,
      smokingAllowed: data.smokingAllowed || false,
      phone: data.phone || '',
      email: data.email || '',
      startTime: data.startTime || '',
      description: data.description || '',
      seats: data.seats || 0,
    };

    const eventFileEntity = {
      eventId,
      eventName: data.name || '',
      ...data.promo,
    };

    const coverFileEntity = {
      eventId,
      eventName: data.name || '',
      ...data.cover,
    };

    console.log(eventEntity);

    const result = await collection.insertOne(eventEntity);
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
    );

    fileCollection.insertOne(eventFileEntity);
    fileCollection.insertOne(coverFileEntity);

    return NextResponse.json(
      {
        message: 'Inserted event successfully',
        data: result,
      },
      { status: SUCCESSFUL }
    );
  } catch (e) {
    console.log(e);
    return new Response({
      message: 'Something went wrong',
      error: e,
      status: INVALIDATE,
    });
  }
}
