/**
 * Create a new proxy host
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} hostData - Proxy host data
 * @returns {Promise<Object>} Created proxy host
 * @throws {Error} If the request fails
 * @example
 * const host = await proxyHostsCreate(apiClient, { domain_names: ["example.com"], forward_host: "192.168.1.1", forward_port: 80 });
 */
async function proxyHostsCreate(apiClient, hostData) {
  return await apiClient.post("/api/nginx/proxy-hosts", hostData, true);
}

export default proxyHostsCreate;
