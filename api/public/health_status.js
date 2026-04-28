/**
 * Get the health status of Nginx Proxy Manager server
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Object>} Server health status
 * @throws {Error} If the request fails
 * @example
 * const status = await healthStatus(apiClient);
 * console.log(status);
 */
async function healthStatus(apiClient) {
  return await apiClient.get("/api", false);
}

export default healthStatus;
