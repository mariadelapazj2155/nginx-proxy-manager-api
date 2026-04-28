/**
 * Create a new certificate
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} certData - Certificate data
 * @returns {Promise<Object>} Created certificate
 * @throws {Error} If the request fails
 * @example
 * const cert = await certificatesCreate(apiClient, { domain_names: ["example.com"] });
 */
async function certificatesCreate(apiClient, certData) {
  return await apiClient.post("/api/nginx/certificates", certData, true);
}

export default certificatesCreate;
