/**
 * Create a new access list
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} listData - Access list data
 * @returns {Promise<Object>} Created access list
 * @throws {Error} If the request fails
 * @example
 * const list = await accessListsCreate(apiClient, {
 *   name: "My Access List",
 *   items: []
 * });
 */
async function accessListsCreate(apiClient, listData) {
  return await apiClient.post("/api/nginx/access-lists", listData, true);
}

export default accessListsCreate;
