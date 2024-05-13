/**
 *
 * @file api-call.ts
 * @description using for api call
 */

import axios from 'axios';

/**
 *
 * API call to POST data
 * @param url
 * @param data
 * @returns
 */
export async function postData(url, data) {
  return await axios.post(url, data);
}
