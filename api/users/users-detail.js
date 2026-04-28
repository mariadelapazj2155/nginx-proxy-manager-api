/**
 * Get a specific user by ID or 'me' for yourself
 * @param {ApiClient} apiClient - API client instance
 * @param {string|number} userId - User ID or 'me' for yourself
 * @returns {Promise<Object>} User with id, created_on, modified_on, is_disabled, email, name, nickname, avatar, and roles
 * @throws {Error} If the request fails
 * @example
 * const user = await usersDetail(apiClient, 1);
 * console.log(user.name);
 *
 * // Get current user
 * const me = await usersDetail(apiClient, "me");
 * console.log(me.email);
 */
async function usersDetail(apiClient, userId) {
  return await apiClient.get(`/api/users/${userId}`, true);
}

export default usersDetail;
