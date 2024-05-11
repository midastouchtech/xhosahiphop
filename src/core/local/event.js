// Utilities
import { getFloat, getInt, localDate } from '../utils';
/**
 *
 * Convert event data for local use
 * @param data
 * @returns
 */
export default function eventToLocal(data) {
    var event = {};
    event.id = data.id;
    event.title = data.title;
    event.image = data.image;
    event.date = localDate(data.date);
    event.address = data.address;
    event.phone = data.phone;
    event.email = data.email;
    event.description = data.description;
    if (data.price) {
        event.price = getFloat(data.price);
    }
    if (data.seats) {
        event.seats = getInt(data.seats);
    }
    if (data.attendees) {
        event.attendees = data.attendees.map(function (item) {
            return {
                id: item.id,
                name: item.fullName,
                cover: item.cover
            };
        });
        event.totalAttendee = data.attendees.length > 3
            ? data.attendees.length
            : null;
    }
    return event;
}
