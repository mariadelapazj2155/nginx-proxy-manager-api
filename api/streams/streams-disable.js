/**
 * Disable a stream
 * @param {ApiClient} apiClient - API client instance
 * @param {number} streamId - Stream ID
 * @returns {Promise<Object>} Disabled stream
 * @throws {Error} If the request fails
 * @example
 * const stream = await streamsDisable(apiClient, 1);
 */
async function streamsDisable(apiClient, streamId) {
  return await apiClient.post(
    `/api/nginx/streams/${streamId}/disable`,
    {},
    true,
  );
}

export default streamsDisable;
