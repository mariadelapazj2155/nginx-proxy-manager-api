/**
 * Get all certificates
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of certificates
 * @throws {Error} If the request fails
 * @example
 * const certs = await certificates(apiClient);
 */
async function certificates(apiClient) {
  return await apiClient.get("/api/nginx/certificates", true);
}

export default certificates;
