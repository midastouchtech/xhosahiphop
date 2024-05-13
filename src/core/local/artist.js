// Utilities
import songToLocal from './song';
import { getFloat, getInt, localDate } from '../utils';
/**
 *
 * Convert songs data for local use
 * @param data
 * @returns
 */
export default function artistToLocal(data) {
  var artist = {};
  artist.id = data.username;
  artist.name = data.name;
  artist.type = data.type;
  artist.totalAlbums = getInt(data.totalAlbums || 0);
  artist.totalSongs = getInt(data.songs.length);
  artist.favorites = getInt(data.favorites || 0);
  artist.cover = data.image || '/images/cover/large/1.jpg';
  artist.description = data.description;
  artist.href = '/music/artist/' + artist.username;
  artist.claimed = data.claimed ? true : false;
  artist.verified = data.verified ? true : false;
  artist.createdBy = data.createdBy ? data.createdBy[0] : null;
  artist.joined = localDate(data.createdAt);
  artist.songs = data.songs.map(function (item) {
    return songToLocal(item);
  });
  if (data.dob) {
    artist.dob = localDate(data.dob);
  }
  if (data.ratings) {
    artist.rating = getFloat(data.ratings);
  }
  console.log(artist);
  return artist;
}
