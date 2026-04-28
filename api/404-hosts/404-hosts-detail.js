/**
 * Get a specific 404 host by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - 404 host ID
 * @returns {Promise<Object>} 404 host details
 * @throws {Error} If the request fails
 * @example
 * const host = await deadHostsDetail(apiClient, 1);
 */
async function deadHostsDetail(apiClient, hostId) {
  return await apiClient.get(`/api/nginx/dead-hosts/${hostId}`, true);
}

export default deadHostsDetail;
