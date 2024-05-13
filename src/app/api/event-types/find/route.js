import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
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
    const collection = db.collection('event-types');
    const body = await req.json();
    //console.log('body', body);
    const { searchString } = body;
    // search for any artist that has the search string in their username
    const result = await collection
      .find({ name: { $regex: searchString, $options: 'i' } })
      .limit(10)
      .toArray();

    return NextResponse.json(
      {
        message: 'Found artists successfully',
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
