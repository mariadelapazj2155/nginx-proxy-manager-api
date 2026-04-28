/**
 * Verify 2FA code and get full token
 * @param {ApiClient} apiClient - API client instance
 * @param {string} challengeToken - Challenge token from initial authentication
 * @param {string} code - 2FA code (6 digits)
 * @returns {Promise<Object>} Token information with expiration date
 * @throws {Error} If the request fails
 * @example
 * const token = await tokens2fa(apiClient, "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9...", "012345");
 * console.log(token.expires);
 */
async function tokens2fa(apiClient, challengeToken, code) {
  return await apiClient.post(
    "/api/tokens/2fa",
    { challenge_token: challengeToken, code },
    false,
  );
}

export default tokens2fa;
