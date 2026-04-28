/**
 * Get a specific access list by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {number} listId - Access list ID
 * @returns {Promise<Object>} Access list details
 * @throws {Error} If the request fails
 * @example
 * const list = await accessListsDetail(apiClient, 1);
 */
async function accessListsDetail(apiClient, listId) {
  return await apiClient.get(`/api/nginx/access-lists/${listId}`, true);
}

export default accessListsDetail;
