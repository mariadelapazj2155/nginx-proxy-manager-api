/**
 * Get all settings
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of settings
 * @throws {Error} If the request fails
 * @example
 * const settings = await settings(apiClient);
 */
async function settings(apiClient) {
  return await apiClient.get("/api/settings", true);
}

export default settings;
