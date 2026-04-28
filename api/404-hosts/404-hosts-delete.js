/**
 * Delete a 404 host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - 404 host ID
 * @returns {Promise<boolean>} True if deleted successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await deadHostsDelete(apiClient, 1);
 */
async function deadHostsDelete(apiClient, hostId) {
  return await apiClient.delete(`/api/nginx/dead-hosts/${hostId}`, true);
}

export default deadHostsDelete;
