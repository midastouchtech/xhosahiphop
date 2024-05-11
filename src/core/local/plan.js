// Utilities
import { getFloat, getInt } from '../utils';
/**
 *
 * Convert plan data for local use
 * @param data
 * @returns
 */
export default function planToLocal(data) {
    var plan = {};
    plan.id = data.id;
    plan.title = data.name;
    plan.icon = data.icon;
    plan.subscribe = data.subscribed;
    if (data.price) {
        plan.price = getFloat(data.price);
    }
    if (data.features) {
        plan.features = data.features.map(function (item) {
            item.id = getInt(item.id);
            item.title = item.name;
            return item;
        });
    }
    return plan;
}
