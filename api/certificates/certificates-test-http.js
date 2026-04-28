/**
 * Test HTTP reachability for certificate
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} testData - Test payload
 * @returns {Promise<Object>} Test result
 * @throws {Error} If the request fails
 * @example
 * const result = await certificatesTestHttp(apiClient, { domain: "example.com" });
 */
async function certificatesTestHttp(apiClient, testData) {
  return await apiClient.post(
    "/api/nginx/certificates/test-http",
    testData,
    true,
  );
}

export default certificatesTestHttp;
