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
    artist.id = data.id;
    artist.name = data.name;
    artist.type = data.type;
    artist.totalAlbums = getInt(data.totalAlbums);
    artist.totalSongs = getInt(data.totalSongs);
    artist.favorites = getInt(data.favorites);
    artist.cover = data.artistCover;
    artist.description = data.description;
    artist.href = '/music/artist/' + artist.id;
    artist.songs = data.songList.map(function (item) { return songToLocal(item); });
    if (data.dob) {
        artist.dob = localDate(data.dob);
    }
    if (data.artistRatings) {
        artist.rating = getFloat(data.artistRatings);
    }
    return artist;
}
