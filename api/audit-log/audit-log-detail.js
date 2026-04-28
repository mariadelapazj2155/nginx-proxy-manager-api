/**
 * Get a specific audit log event by ID
 * @param {ApiClient} apiClient - API client instance
 * @param {number} id - Audit log event ID
 * @returns {Promise<Object>} Audit log event with id, created_on, modified_on, user_id, object_type, object_id, action, and meta
 * @throws {Error} If the request fails
 * @example
 * const event = await auditLogDetail(apiClient, 1);
 * console.log(event.action); // "created"
 */
async function auditLogDetail(apiClient, id) {
  return await apiClient.get(`/api/audit-log/${id}`, true);
}

export default auditLogDetail;
