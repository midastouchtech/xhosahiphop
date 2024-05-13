import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
export async function GET(req, { params: { slug } }) {
  try {
    console.log('req.method', req.method, 'req.query', req.query);
    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('users');
    console.log('slug', slug);
    // create an aggregate query to get the first 10 artists with their songs. we can identify their songs as songs where the current artist.username is contained in the artists array of the song where artist in this array are object with usernames as ids
    const result = await collection
      .aggregate([
        {
          $match: {
            username: slug,
          },
        },
        {
          $lookup: {
            from: 'songs',
            let: { username: '$username' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $or: [
                      { $in: ['$$username', '$artists.id'] },
                      { $in: ['$$username', '$composers.id'] },
                      { $in: ['$$username', '$lyricists.id'] },
                      { $in: ['$$username', '$directors.id'] },
                    ],
                  },
                },
              },
            ],
            as: 'songs',
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'createdBy',
            foreignField: '_id',
            as: 'createdBy',
          },
        },
        {
          $addFields: {
            totalSongs: { $sum: '$songs' },
          },
        },
        {
          $limit: 15,
        },
      ])
      .toArray();

    console.log('result', result);

    return NextResponse.json(
      {
        message: 'Fetched artists successfully',
        data: result[0],
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
