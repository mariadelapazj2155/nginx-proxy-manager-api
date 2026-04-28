/**
 * Update a stream
 * @param {ApiClient} apiClient - API client instance
 * @param {number} streamId - Stream ID
 * @param {Object} streamData - Stream data to update
 * @returns {Promise<Object>} Updated stream
 * @throws {Error} If the request fails
 * @example
 * const stream = await streamsUpdate(apiClient, 1, { incoming_port: 8080 });
 */
async function streamsUpdate(apiClient, streamId, streamData) {
  return await apiClient.put(
    `/api/nginx/streams/${streamId}`,
    streamData,
    true,
  );
}

export default streamsUpdate;
