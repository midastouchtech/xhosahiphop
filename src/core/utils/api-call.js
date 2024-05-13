/**
 *
 * @file api-call.ts
 * @description using for api call
 */
/**
 *
 * API call to POST data
 * @param url
 * @param data
 * @returns
 */
export async function postData(url, data) {
  return await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
}
