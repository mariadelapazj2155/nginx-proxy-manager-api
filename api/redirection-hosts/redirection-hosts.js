/**
 * Get all redirection hosts
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of redirection hosts
 * @throws {Error} If the request fails
 * @example
 * const hosts = await redirectionHosts(apiClient);
 */
async function redirectionHosts(apiClient) {
  return await apiClient.get("/api/nginx/redirection-hosts", true);
}

export default redirectionHosts;
