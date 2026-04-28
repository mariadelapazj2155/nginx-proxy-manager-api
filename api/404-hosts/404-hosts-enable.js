/**
 * Enable a 404 host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - 404 host ID
 * @returns {Promise<Object>} Enabled 404 host
 * @throws {Error} If the request fails
 * @example
 * const host = await deadHostsEnable(apiClient, 1);
 */
async function deadHostsEnable(apiClient, hostId) {
  return await apiClient.post(
    `/api/nginx/dead-hosts/${hostId}/enable`,
    {},
    true,
  );
}

export default deadHostsEnable;
