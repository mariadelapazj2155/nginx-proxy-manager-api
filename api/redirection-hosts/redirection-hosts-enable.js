/**
 * Enable a redirection host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Redirection host ID
 * @returns {Promise<Object>} Enabled redirection host
 * @throws {Error} If the request fails
 * @example
 * const host = await redirectionHostsEnable(apiClient, 1);
 */
async function redirectionHostsEnable(apiClient, hostId) {
  return await apiClient.post(
    `/api/nginx/redirection-hosts/${hostId}/enable`,
    {},
    true,
  );
}

export default redirectionHostsEnable;
