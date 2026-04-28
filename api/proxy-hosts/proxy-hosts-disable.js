/**
 * Disable a proxy host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Proxy host ID
 * @returns {Promise<Object>} Disabled proxy host
 * @throws {Error} If the request fails
 * @example
 * const host = await proxyHostsDisable(apiClient, 1);
 */
async function proxyHostsDisable(apiClient, hostId) {
  return await apiClient.post(
    `/api/nginx/proxy-hosts/${hostId}/disable`,
    {},
    true,
  );
}

export default proxyHostsDisable;
