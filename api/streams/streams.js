/**
 * Get all streams
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of streams
 * @throws {Error} If the request fails
 * @example
 * const streams = await streams(apiClient);
 */
async function streams(apiClient) {
  return await apiClient.get("/api/nginx/streams", true);
}

export default streams;
