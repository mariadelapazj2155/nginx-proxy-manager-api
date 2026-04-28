/**
 * Get the Swagger/OpenAPI schema of Nginx Proxy Manager API
 * @param {ApiClient} apiClient - API client instance
 * @returns {Promise<Object>} Swagger/OpenAPI schema
 * @throws {Error} If the request fails
 * @example
 * const schema = await getSchema(apiClient);
 * console.log(schema.info.version);
 */
async function getSchema(apiClient) {
  return await apiClient.get("/api/schema", false);
}

export default getSchema;
