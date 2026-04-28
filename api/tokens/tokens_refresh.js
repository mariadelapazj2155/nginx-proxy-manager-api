/**
 * Refresh the access token
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Object>} Refreshed token information with expiration date
 * @throws {Error} If the request fails
 * @example
 * const token = await tokensRefresh(apiClient);
 * console.log(token.expires);
 */
async function tokensRefresh(apiClient) {
  return await apiClient.get("/api/tokens", true);
}

export default tokensRefresh;
