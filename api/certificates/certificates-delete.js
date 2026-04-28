/**
 * Delete a certificate
 * @param {ApiClient} apiClient - API client instance
 * @param {number} certId - Certificate ID
 * @returns {Promise<boolean>} True if deleted successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await certificatesDelete(apiClient, 1);
 */
async function certificatesDelete(apiClient, certId) {
  return await apiClient.delete(`/api/nginx/certificates/${certId}`, true);
}

export default certificatesDelete;
