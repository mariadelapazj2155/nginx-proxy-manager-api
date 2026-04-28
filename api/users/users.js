/**
 * Get all users
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Array>} Array of users with id, created_on, modified_on, is_disabled, email, name, nickname, avatar, and roles
 * @throws {Error} If the request fails
 * @example
 * const usersList = await users(apiClient);
 * console.log(usersList[0].email);
 */
async function users(apiClient) {
  return await apiClient.get("/api/users", true);
}

export default users;
