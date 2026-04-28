/**
 * Update a redirection host
 * @param {ApiClient} apiClient - API client instance
 * @param {number} hostId - Redirection host ID
 * @param {Object} hostData - Redirection host data to update
 * @returns {Promise<Object>} Updated redirection host
 * @throws {Error} If the request fails
 * @example
 * const host = await redirectionHostsUpdate(apiClient, 1, { forward_domain_name: "newer.com" });
 */
async function redirectionHostsUpdate(apiClient, hostId, hostData) {
  return await apiClient.put(
    `/api/nginx/redirection-hosts/${hostId}`,
    hostData,
    true,
  );
}

export default redirectionHostsUpdate;
