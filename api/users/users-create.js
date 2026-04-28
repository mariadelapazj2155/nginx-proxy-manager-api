/**
 * Create a new user
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} userData - User data
 * @param {string} userData.name - User full name
 * @param {string} userData.nickname - User nickname
 * @param {string} userData.email - User email
 * @param {Array<string>} userData.roles - User roles (e.g., ["admin"])
 * @param {boolean} userData.is_disabled - Whether user is disabled
 * @param {Object} userData.auth - Authentication data
 * @param {string} userData.auth.type - Auth type (e.g., "password")
 * @param {string} userData.auth.secret - Password or secret
 * @returns {Promise<Object>} Created user with id, created_on, modified_on, is_disabled, email, name, nickname, avatar, roles, and permissions
 * @throws {Error} If the request fails
 * @example
 * const user = await usersCreate(apiClient, {
 *   name: "John Doe",
 *   nickname: "John",
 *   email: "john@example.com",
 *   roles: ["user"],
 *   is_disabled: false,
 *   auth: {
 *     type: "password",
 *     secret: "mypassword123"
 *   }
 * });
 * console.log(user.id);
 */
async function usersCreate(apiClient, userData) {
  return await apiClient.post("/api/users", userData, true);
}

export default usersCreate;
