/**
 * Get all access lists
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of access lists
 * @throws {Error} If the request fails
 * @example
 * const lists = await accessLists(apiClient);
 * console.log(lists[0].name);
 */
async function accessLists(apiClient) {
  return await apiClient.get("/api/nginx/access-lists", true);
}

export default accessLists;
