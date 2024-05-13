import clientPromise from '@/util/mongo';
import bcrypt from 'bcrypt';
import { omit, assoc } from 'ramda';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
export async function POST(req, {}) {
  try {
    //console.log('req.method', req.method, 'req.query', req.query);

    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('users');
    //console.log('body', req.body);
    let data = await req.json();
    const salt = await bcrypt.genSalt(10);
    //console.log('data', data, 'salt', salt);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    data = {
      ...data,
      hash: hashedPassword,
      createdAt: new Date(),
      verified: false,
      type: 'artist',
      dob: new Date(),
      ratings: 4.5,
      cover: '',
      name: data.firstName + ' ' + data.lastName,
      description: 'I am a great artist',
    };

    const result = await collection.insertOne(data);
    //console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
    );
    return NextResponse.json(
      {
        message: 'User added successfully',
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
