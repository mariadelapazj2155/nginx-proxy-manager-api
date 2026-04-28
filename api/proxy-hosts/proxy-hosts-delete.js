/**
 * Delete a proxy host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Proxy host ID
 * @returns {Promise<boolean>} True if deleted successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await proxyHostsDelete(apiClient, 1);
 */
async function proxyHostsDelete(apiClient, hostId) {
  return await apiClient.delete(`/api/nginx/proxy-hosts/${hostId}`, true);
}

export default proxyHostsDelete;
