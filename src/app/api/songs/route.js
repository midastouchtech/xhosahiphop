import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
export async function GET(req) {
  try {
    //console.log('req.method', req.method, 'req.query', req.query);
    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('songs');
    const result = await collection.find({}).toArray();
    //console.log('founds', result);
    return NextResponse.json(
      {
        message: 'Fetched songs successfully',
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
