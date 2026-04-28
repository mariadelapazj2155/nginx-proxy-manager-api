/**
 * Request a new access token from credentials
 * @param {ApiClient} apiClient - API client instance
 * @param {string} identity - Email or username
 * @param {string} secret - Password or secret key
 * @returns {Promise<Object>} Token information with expiration date and token
 * @throws {Error} If the request fails
 * @example
 * const result = await tokensCreate(apiClient, "me@example.com", "bigredhorsebanana");
 * console.log(result.token, result.expires);
 */
async function tokensCreate(apiClient, identity, secret) {
  const result = await apiClient.post(
    "/api/tokens",
    { identity, secret },
    false,
  );
  return result;
}

export default tokensCreate;
