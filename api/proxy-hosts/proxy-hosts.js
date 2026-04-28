/**
 * Get all proxy hosts
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of proxy hosts
 * @throws {Error} If the request fails
 * @example
 * const hosts = await proxyHosts(apiClient);
 */
async function proxyHosts(apiClient) {
  return await apiClient.get("/api/nginx/proxy-hosts", true);
}

export default proxyHosts;
