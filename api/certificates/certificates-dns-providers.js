/**
 * Get DNS providers for certificates
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of DNS providers
 * @throws {Error} If the request fails
 * @example
 * const providers = await certificatesDnsProviders(apiClient);
 */
async function certificatesDnsProviders(apiClient) {
  return await apiClient.get("/api/nginx/certificates/dns-providers", true);
}

export default certificatesDnsProviders;
