/**
 * Create a new 404 host
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} hostData - 404 host data
 * @returns {Promise<Object>} Created 404 host
 * @throws {Error} If the request fails
 * @example
 * const host = await deadHostsCreate(apiClient, { domain_names: ["dead.com"] });
 */
async function deadHostsCreate(apiClient, hostData) {
  return await apiClient.post("/api/nginx/dead-hosts", hostData, true);
}

export default deadHostsCreate;
