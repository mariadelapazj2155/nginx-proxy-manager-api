/**
 * Update a user by ID or 'me' for yourself
 * @param {ApiClient} apiClient - API client instance
 * @param {string|number} userId - User ID or 'me' for yourself
 * @param {Object} userData - User data to update
 * @param {string} [userData.name] - User full name
 * @param {string} [userData.nickname] - User nickname
 * @param {string} [userData.email] - User email
 * @param {Array<string>} [userData.roles] - User roles (e.g., ["admin"])
 * @param {boolean} [userData.is_disabled] - Whether user is disabled
 * @returns {Promise<Object>} Updated user with id, created_on, modified_on, is_disabled, email, name, nickname, avatar, and roles
 * @throws {Error} If the request fails
 * @example
 * const user = await usersUpdate(apiClient, 2, {
 *   name: "John Doe Updated",
 *   nickname: "Johnny",
 *   is_disabled: false
 * });
 * console.log(user.name);
 */
async function usersUpdate(apiClient, userId, userData) {
  return await apiClient.put(`/api/users/${userId}`, userData, true);
}

export default usersUpdate;
