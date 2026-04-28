/**
 * Get a specific certificate by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {number} certId - Certificate ID
 * @returns {Promise<Object>} Certificate details
 * @throws {Error} If the request fails
 * @example
 * const cert = await certificatesDetail(apiClient, 1);
 */
async function certificatesDetail(apiClient, certId) {
  return await apiClient.get(`/api/nginx/certificates/${certId}`, true);
}

export default certificatesDetail;
