import clientPromise from '@/util/mongo';
import bcrypt from 'bcrypt';
import { omit, assoc, isEmpty, isNil } from 'ramda';
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    //console.log('req.method', req.method, 'req.query', req.query);
    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
    const collection = db.collection('users');
    let data = await req.json();
    //console.log('data', data);
    const user = await collection.findOne({
      username: data.username,
    });
    if (!user || isNil(user) || isEmpty(user)) {
      NextResponse.json(
        { message: 'Incorrect password or username' },
        { status: 401 }
      );
    }
    const passwordsMatch = await bcrypt.compare(data.password, user.hash);
    //console.log('passwordsMatch', passwordsMatch);
    if (!passwordsMatch) {
      return NextResponse.json(
        { message: 'Incorrect password or username' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: 'User logged in successfully',
        data: omit(['hash', 'password', 'cPassword'], user),
      },
      { status: SUCCESSFUL }
    );
  } catch (e) {
    //console.log(e);
    return NextResponse.json(
      {
        message: 'Something went wrong',
        error: e,
      },
      { status: INVALIDATE }
    );
  }
}
