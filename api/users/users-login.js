/**
 * Login as a specific user (admin feature)
 * @param {ApiClient} apiClient - API client instance
 * @param {number} userId - User ID
 * @returns {Promise<Object>} Login response with expires and user data
 * @throws {Error} If the request fails
 * @example
 * const result = await usersLogin(apiClient, 2);
 * console.log(result.expires); // "2020-01-31T10:56:23.239Z"
 * console.log(result.user.email); // "user2@example.com"
 */
async function usersLogin(apiClient, userId) {
  return await apiClient.post(`/api/users/${userId}/login`, {}, true);
}

export default usersLogin;
