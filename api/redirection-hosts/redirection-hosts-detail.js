/**
 * Get a specific redirection host by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Redirection host ID
 * @returns {Promise<Object>} Redirection host details
 * @throws {Error} If the request fails
 * @example
 * const host = await redirectionHostsDetail(apiClient, 1);
 */
async function redirectionHostsDetail(apiClient, hostId) {
  return await apiClient.get(`/api/nginx/redirection-hosts/${hostId}`, true);
}

export default redirectionHostsDetail;
