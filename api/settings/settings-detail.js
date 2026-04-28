/**
 * Get a specific setting by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {string} settingId - Setting ID
 * @returns {Promise<Object>} Setting details
 * @throws {Error} If the request fails
 * @example
 * const setting = await settingsDetail(apiClient, "default-site");
 */
async function settingsDetail(apiClient, settingId) {
  return await apiClient.get(`/api/settings/${settingId}`, true);
}

export default settingsDetail;
