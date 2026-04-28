/**
 * Get audit log entries
 * @param {ApiClient} apiClient - API client instance
 * @param {Object} params - Query parameters (optional)
 * @param {number} params.expand - Expand related data
 * @param {string} params.query - Search query
 * @returns {Promise<Array>} Array of audit log entries with id, created_on, modified_on, user_id, object_type, object_id, action, and meta
 * @throws {Error} If the request fails
 * @example
 * const logs = await auditLog(apiClient);
 * console.log(logs[0].action); // "updated"
 */
async function auditLog(apiClient = {}) {
  return await apiClient.get("/api/audit-log", true);
}

export default auditLog;
