/**
 * Disable a 404 host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - 404 host ID
 * @returns {Promise<Object>} Disabled 404 host
 * @throws {Error} If the request fails
 * @example
 * const host = await deadHostsDisable(apiClient, 1);
 */
async function deadHostsDisable(apiClient, hostId) {
  return await apiClient.post(
    `/api/nginx/dead-hosts/${hostId}/disable`,
    {},
    true,
  );
}

export default deadHostsDisable;
