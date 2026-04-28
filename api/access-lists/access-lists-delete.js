/**
 * Delete an access list
 * @param {ApiClient} apiClient - API client instance
 * @param {number} listId - Access list ID
 * @returns {Promise<boolean>} True if deleted successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await accessListsDelete(apiClient, 1);
 */
async function accessListsDelete(apiClient, listId) {
  return await apiClient.delete(`/api/nginx/access-lists/${listId}`, true);
}

export default accessListsDelete;
