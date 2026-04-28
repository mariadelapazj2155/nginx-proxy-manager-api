/**
 * Disable 2FA for a user
 * @param {ApiClient} apiClient - API client instance
 * @param {number} userId - User ID
 * @param {string} code - 2FA code
 * @returns {Promise<boolean>} True if disabled successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await users2faDisable(apiClient, 2, "012345");
 * console.log(result); // true
 */
async function users2faDisable(apiClient, userId, code) {
  return await apiClient.delete(`/api/users/${userId}/2fa?code=${code}`, true);
}

export default users2faDisable;
