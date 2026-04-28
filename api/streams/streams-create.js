/**
 * Create a new stream
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} streamData - Stream data
 * @returns {Promise<Object>} Created stream
 * @throws {Error} If the request fails
 * @example
 * const stream = await streamsCreate(apiClient, { incoming_port: 3306, forwarding_host: "db.local", forwarding_port: 3306 });
 */
async function streamsCreate(apiClient, streamData) {
  return await apiClient.post("/api/nginx/streams", streamData, true);
}

export default streamsCreate;
