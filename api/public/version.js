/**
 * Get version information of Nginx Proxy Manager
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Object>} Version information
 * @throws {Error} If the request fails
 * @example
 * const version = await getVersion(apiClient);
 * console.log(version.version);
 */
async function getVersion(apiClient) {
  return await apiClient.get("/api/version/check", false);
}

export default getVersion;
