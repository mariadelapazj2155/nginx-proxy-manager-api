/**
 * Delete a redirection host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Redirection host ID
 * @returns {Promise<boolean>} True if deleted successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await redirectionHostsDelete(apiClient, 1);
 */
async function redirectionHostsDelete(apiClient, hostId) {
  return await apiClient.delete(`/api/nginx/redirection-hosts/${hostId}`, true);
}

export default redirectionHostsDelete;
