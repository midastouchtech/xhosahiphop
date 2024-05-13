import clientPromise from '@/util/mongo';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';
/**
 * @name FindArtists
 * @file route.js
 * @description find artists route
 */
export async function GET(req, { params }) {
  try {
    //console.log('req.method', req.method, 'req.query', req.query, params);

    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('users');

    // get slug from request
    const { slug } = params;
    //console.log('slug', slug);
    // search for any artist that has the the username as slug and find all albums in albums table where the artists username matches an artist in the artists, lyricists, compoers or directors list of the album
    // for each album found, find all songs in the songs collection where the song.album.id matches the album.id
    const result = await collection
      .aggregate([
        {
          $match: {
            username: slug,
          },
        },
        {
          $lookup: {
            from: 'albums',
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
              {
                $lookup: {
                  from: 'songs',
                  let: { albumId: '$id' },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: ['$album.id', '$$albumId'],
                        },
                      },
                    },
                  ],
                  as: 'songList',
                },
              },
            ],
            as: 'albums',
          },
        },
      ])
      .toArray();

    return NextResponse.json(
      {
        message: 'Found artists successfully',
        data: result[0]?.albums,
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
