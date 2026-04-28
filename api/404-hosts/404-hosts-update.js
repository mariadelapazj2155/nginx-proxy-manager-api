/**
 * Update a 404 host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - 404 host ID
 * @param {Object} hostData - 404 host data to update
 * @returns {Promise<Object>} Updated 404 host
 * @throws {Error} If the request fails
 * @example
 * const host = await deadHostsUpdate(apiClient, 1, { domain_names: ["updated.com"] });
 */
async function deadHostsUpdate(apiClient, hostId, hostData) {
  return await apiClient.put(`/api/nginx/dead-hosts/${hostId}`, hostData, true);
}

export default deadHostsUpdate;
