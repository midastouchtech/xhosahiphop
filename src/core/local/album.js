// Utilities
import songToLocal from './song';
import { getFloat, getInt, getPersonInfo, localDate } from '../utils';
/**
 *
 * Convert album data for local use
 * @param data
 * @returns
 */
export default function albumToLocal(data) {
  var album = {};
  album.id = data.id;
  album.name = data.name;
  album.type = data.type;
  album.cover = data.cover;
  album.favorites = getInt(data.favourites);
  album.thumb = data.thumb;
  album.rating = getFloat(data.rating);
  album.company = data.company;
  album.downloads = data.downloads;
  album.date = localDate(data.release);
  album.href = data.href;
  album.songs = data.songList.map(function (item) {
    return songToLocal(item);
  });
  album.artists = data.artists;
  if (data.premium) {
    album.premium = data.premium;
  }
  if (data.favorite) {
    album.favorite = data.favorite;
  }
  if (data.albumRatings) {
    album.rating = getFloat(data.albumRatings);
  }
  return album;
}
