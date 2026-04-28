/**
 * Enable a stream
 * @param {ApiClient} apiClient - API client instance
 * @param {number} streamId - Stream ID
 * @returns {Promise<Object>} Enabled stream
 * @throws {Error} If the request fails
 * @example
 * const stream = await streamsEnable(apiClient, 1);
 */
async function streamsEnable(apiClient, streamId) {
  return await apiClient.post(
    `/api/nginx/streams/${streamId}/enable`,
    {},
    true,
  );
}

export default streamsEnable;
