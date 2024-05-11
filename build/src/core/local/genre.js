// Utilities
import songToLocal from './song';
/**
 *
 * Convert genre data for local use
 * @param data
 * @returns
 */
export default function genreToLocal(data) {
    var genre = {};
    genre.id = data.id;
    genre.title = data.name;
    genre.type = data.type;
    genre.cover = data.genreCover;
    genre.href = '/music/genre/' + genre.id;
    genre.songs = data.songList.map(function (item) { return songToLocal(item); });
    return genre;
}
