/**
 * Update an access list
 * @param {ApiClient} apiClient - API client instance
 * @param {number} listId - Access list ID
 * @param {Object} listData - Access list data to update
 * @returns {Promise<Object>} Updated access list
 * @throws {Error} If the request fails
 * @example
 * const list = await accessListsUpdate(apiClient, 1, { name: "Updated Name" });
 */
async function accessListsUpdate(apiClient, listId, listData) {
  return await apiClient.put(
    `/api/nginx/access-lists/${listId}`,
    listData,
    true,
  );
}

export default accessListsUpdate;
