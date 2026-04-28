/**
 * Delete a stream
 * @param {ApiClient} apiClient - API client instance
 * @param {number} streamId - Stream ID
 * @returns {Promise<boolean>} True if deleted successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await streamsDelete(apiClient, 1);
 */
async function streamsDelete(apiClient, streamId) {
  return await apiClient.delete(`/api/nginx/streams/${streamId}`, true);
}

export default streamsDelete;
