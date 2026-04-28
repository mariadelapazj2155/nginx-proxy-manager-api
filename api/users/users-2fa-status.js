/**
 * Get user 2FA status
 * @param {ApiClient} apiClient - API client instance
 * @param {number} userId - User ID
 * @returns {Promise<Object>} 2FA status with enabled and backup_codes_remaining
 * @throws {Error} If the request fails
 * @example
 * const status = await users2faStatus(apiClient, 2);
 * console.log(status.enabled); // false
 * console.log(status.backup_codes_remaining); // 0
 */
async function users2faStatus(apiClient, userId) {
  return await apiClient.get(`/api/users/${userId}/2fa`, true);
}

export default users2faStatus;
