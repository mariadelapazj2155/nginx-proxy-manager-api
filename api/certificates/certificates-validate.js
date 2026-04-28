/**
 * Validate custom certificates
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} certFiles - Certificate files
 * @returns {Promise<Object>} Validation result
 * @throws {Error} If the request fails
 * @example
 * const result = await certificatesValidate(apiClient, { certificate: "...", key: "..." });
 */
async function certificatesValidate(apiClient, certFiles) {
  return await apiClient.post(
    "/api/nginx/certificates/validate",
    certFiles,
    true,
  );
}

export default certificatesValidate;
