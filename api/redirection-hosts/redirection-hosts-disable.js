/**
 * Disable a redirection host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Redirection host ID
 * @returns {Promise<Object>} Disabled redirection host
 * @throws {Error} If the request fails
 * @example
 * const host = await redirectionHostsDisable(apiClient, 1);
 */
async function redirectionHostsDisable(apiClient, hostId) {
  return await apiClient.post(
    `/api/nginx/redirection-hosts/${hostId}/disable`,
    {},
    true,
  );
}

export default redirectionHostsDisable;
