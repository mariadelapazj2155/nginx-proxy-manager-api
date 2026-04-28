/**
 * Update a proxy host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Proxy host ID
 * @param {Object} hostData - Proxy host data to update
 * @returns {Promise<Object>} Updated proxy host
 * @throws {Error} If the request fails
 * @example
 * const host = await proxyHostsUpdate(apiClient, 1, { forward_port: 8080 });
 */
async function proxyHostsUpdate(apiClient, hostId, hostData) {
  return await apiClient.put(
    `/api/nginx/proxy-hosts/${hostId}`,
    hostData,
    true,
  );
}

export default proxyHostsUpdate;
