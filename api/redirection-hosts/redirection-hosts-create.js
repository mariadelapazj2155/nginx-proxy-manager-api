/**
 * Create a new redirection host
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} hostData - Redirection host data
 * @returns {Promise<Object>} Created redirection host
 * @throws {Error} If the request fails
 * @example
 * const host = await redirectionHostsCreate(apiClient, { domain_names: ["old.com"], forward_domain_name: "new.com" });
 */
async function redirectionHostsCreate(apiClient, hostData) {
  return await apiClient.post("/api/nginx/redirection-hosts", hostData, true);
}

export default redirectionHostsCreate;
