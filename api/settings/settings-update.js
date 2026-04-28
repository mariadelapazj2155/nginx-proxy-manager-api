/**
 * Update a setting
 * @param {ApiClient} apiClient - API client instance
 * @param {string} settingId - Setting ID
 * @param {Object} settingData - Setting data to update
 * @returns {Promise<Object>} Updated setting
 * @throws {Error} If the request fails
 * @example
 * const setting = await settingsUpdate(apiClient, "default-site", { value: "example.com" });
 */
async function settingsUpdate(apiClient, settingId, settingData) {
  return await apiClient.put(`/api/settings/${settingId}`, settingData, true);
}

export default settingsUpdate;
