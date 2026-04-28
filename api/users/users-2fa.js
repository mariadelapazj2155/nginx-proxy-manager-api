/**
 * Start 2FA setup for a user, returns QR code URL
 * @param {ApiClient} apiClient - API client instance
 * @param {number} userId - User ID
 * @returns {Promise<Object>} 2FA setup data with secret and otpauth_url
 * @throws {Error} If the request fails
 * @example
 * const setup = await users2fa(apiClient, 2);
 * console.log(setup.secret); // "JZYCEBIEEJYUGPQM"
 * console.log(setup.otpauth_url); // "otpauth://totp/..."
 */
async function users2fa(apiClient, userId) {
  return await apiClient.post(`/api/users/${userId}/2fa`, {}, true);
}

export default users2fa;
