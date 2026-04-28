/**
 * Update a user's authentication (password)
 * @param {ApiClient} apiClient - API client instance
 * @param {string|number} userId - User ID or 'me' for yourself
 * @param {Object} authData - Authentication data
 * @param {string} authData.type - Auth type (e.g., "password")
 * @param {string} authData.current - Current password
 * @param {string} authData.secret - New password
 * @returns {Promise<boolean>} True if updated successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await usersAuth(apiClient, "me", {
 *   type: "password",
 *   current: "oldpassword",
 *   secret: "newpassword123"
 * });
 * console.log(result); // true
 */
async function usersAuth(apiClient, userId, authData) {
  return await apiClient.put(`/api/users/${userId}/auth`, authData, true);
}

export default usersAuth;
