/**
 * Enable a proxy host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Proxy host ID
 * @returns {Promise<Object>} Enabled proxy host
 * @throws {Error} If the request fails
 * @example
 * const host = await proxyHostsEnable(apiClient, 1);
 */
async function proxyHostsEnable(apiClient, hostId) {
  return await apiClient.post(
    `/api/nginx/proxy-hosts/${hostId}/enable`,
    {},
    true,
  );
}

export default proxyHostsEnable;
