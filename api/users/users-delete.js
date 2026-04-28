/**
 * Delete a user by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {number} userId - User ID
 * @returns {Promise<boolean>} True if deleted successfully
 * @throws {Error} If the request fails
 * @example
 * const result = await usersDelete(apiClient, 2);
 * console.log(result); // true
 */
async function usersDelete(apiClient, userId) {
  return await apiClient.delete(`/api/users/${userId}`, true);
}

export default usersDelete;
