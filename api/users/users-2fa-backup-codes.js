/**
 * Regenerate 2FA backup codes for a user
 * @param {ApiClient} apiClient - API client instance
 * @param {number} userId - User ID
 * @param {string} code - 2FA verification code
 * @returns {Promise<Object>} Object with backup_codes array
 * @throws {Error} If the request fails
 * @example
 * const result = await users2faBackupCodes(apiClient, 2, "123456");
 * console.log(result.backup_codes); // ["6CD7CB06", "495302F3", ...]
 */
async function users2faBackupCodes(apiClient, userId, code) {
  return await apiClient.post(
    `/api/users/${userId}/2fa/backup-codes`,
    { code },
    true,
  );
}

export default users2faBackupCodes;
