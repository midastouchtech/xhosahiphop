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

const getCleanType = (type) => {
  return {
    id: type.id,
    name: type.name,
    image: type.image,
    href: '/music/event-types/' + type.id,
  };
};

const getTypeInfo = async (data) => {
  try {
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('event-types');
    if (data) {
      const types = collection
        .find({ _id: { $in: data.map((e) => new ObjectId(e.value)) } })
        .toArray();
      return types.map((p) => getCleanType(p));
    }
    return [];
  } catch (e) {
    //console.log(e);
    return [];
  }
};

const createVenueId = (name) => {
  const randomString = getRandomString(6);
  return name.replace(/\s+/g, '-').toLowerCase() + '-' + randomString;
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
    const collection = db.collection('venues');

    const data = await req.json();
    //console.log('inserting data', data);
    const venueId = createVenueId(data.name);
    const entity = {
      id: venueId,
      username: toKebabCase(data.name),
      approved: false,
      name: data.name,
      cover: data.cover,
      promo: data.promo,
      street1: data.street1,
      street2: data.street2,
      suburb: data.suburb,
      city: data.city,
      province: data.province,
      country: data.country,
      email: data.email,
      contactNumber: data.contactNumber,
      additionalContactNumber: data.additionalContactNumber,
      contactNumber2: data.contactNumber2,
      allowsGoodsSale: data.allowsGoodsSale,
      allowsAlchoholSale: data.allowsAlchoholSale,
      allowsAlchoholConsumption: data.allowsAlchoholConsumption,
      hasToilets: data.hasToilets,
      hasWifi: data.hasWifi,
      isIndoors: data.isIndoors,
      isOutdoors: data.isOutdoors,
      size: data.size,
      description: data.description,
      eventType: await getTypeInfo(data['event-type']),
      isPaid: data.isPaid,
      price: data.price,
      createdAt: moment().format(),
      createdBy: new ObjectId(data.userId),
      verified: false,
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
