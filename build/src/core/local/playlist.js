// Utilities
import songToLocal from './song';
import { getFloat } from '../utils';
/**
 *
 * Convert playlist data for local use
 * @param data
 * @returns
 */
export default function playlistToLocal(data) {
    var playlist = {};
    playlist.id = data.id;
    playlist.title = data.name;
    playlist.type = data.type;
    playlist.cover = data.playlistCover;
    playlist.likes = getFloat(data.links);
    playlist.href = '/music/playlist/' + playlist.id;
    playlist.songs = data.songList.map(function (item) { return songToLocal(item); });
    return playlist;
}
