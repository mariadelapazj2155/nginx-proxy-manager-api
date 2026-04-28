/**
 * Get a specific proxy host by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Proxy host ID
 * @returns {Promise<Object>} Proxy host details
 * @throws {Error} If the request fails
 * @example
 * const host = await proxyHostsDetail(apiClient, 1);
 */
async function proxyHostsDetail(apiClient, hostId) {
  return await apiClient.get(`/api/nginx/proxy-hosts/${hostId}`, true);
}

export default proxyHostsDetail;
