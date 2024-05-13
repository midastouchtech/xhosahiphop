// Utilities
import { getFloat, getInt, getPersonInfo, localDate } from '../utils';
import moment from 'moment';
/**
 *
 * Convert songs data for local use
 * @param data
 * @returns
 */
export default function songToLocal(data) {
  var song = {};
  song.id = data.id;
  song.title = data.title;
  song.name = data.title;
  song.type = data.type;
  song.cover = data.cover.fileUrl;
  song.date = localDate(data.release || data.date);
  song.src = data.playbackUrl;
  song.preview = data.preview;
  song.company = data.company;
  song.thumb = data.thumb.url;
  song.rating = getFloat(data.rating);
  song.duration = moment.utc(data.duration * 1000).format('mm:ss');
  song.played = getInt(data.played);
  song.favorites = getInt(data.favorites);
  song.downloads = data.downloads;
  song.lyrics = data.lyrics;
  song.href = '/music/song/' + song.id;
  song.artists = data.artists;
  song.composers = data.composers;
  song.lyricists = data.lyricists;
  song.directors = data.directors;
  song.categories = data.categories;
  song.album = data.album;
  song.premium = data.premium;
  song.price = data.price;
  return song;
}
