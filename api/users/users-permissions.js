/**
 * Update a user's permissions
 * @param {ApiClient} apiClient - API client instance
 * @param {number} userId - User ID
 * @param {Object} permissions - Permissions data
 * @param {string} permissions.visibility - Visibility level ("all", "user", "hidden")
 * @param {string} permissions.access_lists - Access lists permission ("manage", "view", "hidden")
 * @param {string} permissions.certificates - Certificates permission ("manage", "view", "hidden")
 * @param {string} permissions.dead_hosts - Dead hosts permission ("manage", "view", "hidden")
 * @param {string} permissions.proxy_hosts - Proxy hosts permission ("manage", "view", "hidden")
 * @param {string} permissions.redirection_hosts - Redirection hosts permission ("manage", "view", "hidden")
 * @param {string} permissions.streams - Streams permission ("manage", "view", "hidden")
 * @returns {Promise<boolean>} True if updated successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await usersPermissions(apiClient, 2, {
 *   visibility: "all",
 *   proxy_hosts: "manage",
 *   certificates: "view"
 * });
 * console.log(result); // true
 */
async function usersPermissions(apiClient, userId, permissions) {
  return await apiClient.put(
    `/api/users/${userId}/permissions`,
    permissions,
    true,
  );
}

export default usersPermissions;
