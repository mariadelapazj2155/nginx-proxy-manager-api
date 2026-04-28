/**
 * Download a certificate
 * @param {ApiClient} apiClient - API client instance
 * @param {number} certId - Certificate ID
 * @returns {Promise<Object>} Certificate files
 * @throws {Error} If the request fails
 * @example
 * const files = await certificatesDownload(apiClient, 1);
 */
async function certificatesDownload(apiClient, certId) {
  return await apiClient.get(
    `/api/nginx/certificates/${certId}/download`,
    true,
  );
}

export default certificatesDownload;
