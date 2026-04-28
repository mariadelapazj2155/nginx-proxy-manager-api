/**
 * Get all 404 hosts
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of 404 hosts
 * @throws {Error} If the request fails
 * @example
 * const hosts = await deadHosts(apiClient);
 */
async function deadHosts(apiClient) {
  return await apiClient.get("/api/nginx/dead-hosts", true);
}

export default deadHosts;
