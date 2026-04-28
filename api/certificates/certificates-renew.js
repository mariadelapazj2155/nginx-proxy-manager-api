/**
 * Renew a certificate
 * @param {ApiClient} apiClient - API client instance
 * @param {number} certId - Certificate ID
 * @returns {Promise<Object>} Renewed certificate
 * @throws {Error} If the request fails
 * @example
 * const cert = await certificatesRenew(apiClient, 1);
 */
async function certificatesRenew(apiClient, certId) {
  return await apiClient.post(
    `/api/nginx/certificates/${certId}/renew`,
    {},
    true,
  );
}

export default certificatesRenew;
