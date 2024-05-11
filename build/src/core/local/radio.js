/**
 *
 * Convert radio data for local use
 * @param data
 * @returns
 */
export default function radioToLocal(data) {
    var radio = {};
    radio.id = data.id;
    radio.title = data.name;
    radio.type = data.type;
    radio.cover = data.radioCover;
    radio.src = data.url;
    if (data.premium) {
        radio.premium = data.premium;
    }
    if (data.favorite) {
        radio.favorite = data.favorite;
    }
    return radio;
}
