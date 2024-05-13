import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
import { omit, assoc } from 'ramda';
import { ObjectId } from 'mongodb';
/**
 * @name FindArtists
 * @file route.js
 * @description find artists route
 */
export async function POST(req) {
  try {
    //console.log('req.method', req.method, 'req.query', req.query);
    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('users');
    const body = await req.json();
    //console.log('body', body);
    const update = body;

    const operationResult = await collection.updateOne(
      { _id: new ObjectId(body._id) },
      {
        $set: omit(
          ['_id'],
          assoc('name', update.firstName + ' ' + update.lastName, update)
        ),
      },
      {
        upsert: false,
      }
    );

    const updated = await collection.findOne({ _id: new ObjectId(body._id) });

    return NextResponse.json(
      {
        message: 'Artist updated successfully',
        data: omit(['hash', 'password', 'cPassword'], updated),
        operationResult,
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
