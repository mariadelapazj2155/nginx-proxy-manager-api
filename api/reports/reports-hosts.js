/**
 * Get report on host statistics
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Object>} Host statistics report
 * @throws {Error} If the request fails
 * @example
 * const report = await reportsHosts(apiClient);
 */
async function reportsHosts(apiClient) {
  return await apiClient.get("/api/reports/hosts", true);
}

export default reportsHosts;
