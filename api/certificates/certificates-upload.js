/**
 * Upload a custom certificate
 * @param {ApiClient} apiClient - API client instance
 * @param {number} certId - Certificate ID
 * @param {Object} certFiles - Certificate files
 * @returns {Promise<Object>} Uploaded certificate
 * @throws {Error} If the request fails
 * @example
 * const cert = await certificatesUpload(apiClient, 1, { certificate: "...", key: "..." });
 */
async function certificatesUpload(apiClient, certId, certFiles) {
  return await apiClient.post(
    `/api/nginx/certificates/${certId}/upload`,
    certFiles,
    true,
  );
}

export default certificatesUpload;
