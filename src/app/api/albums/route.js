import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
export async function GET(req) {
  try {
    //console.log('req.method', req.method, 'req.query', req.query);
    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('albums');
    // create an aggregate query to get the first 10 albums and all songs for each album
    const result = await collection
      .aggregate([
        {
          $lookup: {
            from: 'songs',
            localField: 'id',
            foreignField: 'album.id',
            as: 'songList',
          },
        },
        {
          $limit: 10,
        },
      ])
      .toArray();
    return NextResponse.json(
      {
        message: 'Fetched albums successfully',
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
