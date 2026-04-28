/**
 * Get a specific stream by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {number} streamId - Stream ID
 * @returns {Promise<Object>} Stream details
 * @throws {Error} If the request fails
 * @example
 * const stream = await streamsDetail(apiClient, 1);
 */
async function streamsDetail(apiClient, streamId) {
  return await apiClient.get(`/api/nginx/streams/${streamId}`, true);
}

export default streamsDetail;
