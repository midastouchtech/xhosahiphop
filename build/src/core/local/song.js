// Utilities
import { getFloat, getInt, getPersonInfo, localDate } from '../utils';
/**
 *
 * Convert songs data for local use
 * @param data
 * @returns
 */
export default function songToLocal(data) {
    var song = {};
    song.id = data.id;
    song.title = data.name;
    song.type = data.type;
    song.cover = data.songCover;
    song.date = localDate(data.release);
    song.src = data.songUrl;
    song.company = data.company;
    song.thumb = data.songThumb;
    song.rating = getFloat(data.songRatings);
    song.duration = data.songDuration;
    song.played = getInt(data.played);
    song.favorites = getInt(data.favorites);
    song.downloads = data.songDownloads;
    song.lyrics = data.songLyrics;
    song.href = '/music/song/' + song.id;
    song.artists = getPersonInfo(data.artists);
    song.composers = getPersonInfo(data.composers);
    song.lyricists = getPersonInfo(data.lyricists);
    song.directors = getPersonInfo(data.directors);
    song.categories = getPersonInfo(data.categories);
    if (data.premium) {
        song.premium = data.premium;
    }
    if (data.favorite) {
        song.favorite = data.favorite;
    }
    if (data.album) {
        song.album = {
            id: getInt(data.album.id),
            name: data.album.name
        };
    }
    return song;
}
