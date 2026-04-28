import ApiClient from "../utils/ApiClient.js";
import healthStatus from "../api/public/health_status.js";
import getSchema from "../api/public/schema.js";
import getVersion from "../api/public/version.js";
import tokensRefresh from "../api/tokens/tokens_refresh.js";
import tokensCreate from "../api/tokens/tokens_create.js";
import auditLog from "../api/audit-log/audit-log.js";
import auditLogDetail from "../api/audit-log/audit-log-detail.js";
import users from "../api/users/users.js";

const data = {
  url: "https://your-npm-server.com:8181",
  email: "admin@example.com",
  password: "your-secure-password-here",
};

const api = new ApiClient(data);

async function testHealthStatus() {
  try {
    console.log("🏥 Testowanie Health Status...");
    const status = await healthStatus(api);
    console.log("✅ Health Status OK:", status);
  } catch (error) {
    console.error("❌ Health Status Error:", error.message);
  }
}

async function testSchema() {
  try {
    console.log("📋 Testowanie Schema...");
    const schema = await getSchema(api);
    console.log("✅ Schema OK");
    console.log("Wersja:", schema.info?.version);
    console.log("Liczba endpointów:", Object.keys(schema.paths || {}).length);
  } catch (error) {
    console.error("❌ Schema Error:", error.message);
  }
}

async function testVersion() {
  try {
    console.log("📦 Testowanie Version...");
    const version = await getVersion(api);
    console.log("✅ Version OK:", version);
  } catch (error) {
    console.error("❌ Version Error:", error.message);
  }
}

async function testTokensRefresh() {
  try {
    console.log("🔑 Testing Tokens Refresh...");
    const token = await tokensRefresh(api);
    console.log("✅ Tokens Refresh OK");
    console.log("Expires:", token.expires);
  } catch (error) {
    console.error("❌ Tokens Refresh Error:", error.message);
  }
}

async function testTokensCreate() {
  try {
    console.log("🔐 Testing Tokens Create...");
    const result = await tokensCreate(api, data.email, data.password);
    console.log("✅ Tokens Create OK");
    console.log("Expires:", result.expires);
  } catch (error) {
    console.error("❌ Tokens Create Error:", error.message);
  }
}

// Uruchom testy
await testHealthStatus();
await testSchema();
await testVersion();
await testTokensCreate();
await testTokensRefresh();

async function testAuditLog() {
  try {
    console.log("📜 Testing Audit Log...");
    const logs = await auditLog(api);
    console.log("✅ Audit Log OK");
    console.log("Entries:", logs.length);
    if (logs.length > 0) {
      console.log("Latest entry:", logs[0].action, "on", logs[0].object_type);
    }
  } catch (error) {
    console.error("❌ Audit Log Error:", error.message);
  }
}

async function testAuditLogDetail() {
  try {
    console.log("📄 Testing Audit Log Detail...");
    const event = await auditLogDetail(api, 1);
    console.log("✅ Audit Log Detail OK");
    console.log("Action:", event.action, "on", event.object_type);
  } catch (error) {
    console.error("❌ Audit Log Detail Error:", error.message);
  }
}

await testAuditLog();
await testAuditLogDetail();

async function testUsers() {
  try {
    console.log("👥 Testing Users...");
    const usersList = await users(api);
    console.log("✅ Users OK");
    console.log("Total users:", usersList.length);
    if (usersList.length > 0) {
      console.log("First user:", usersList[0].name, `(${usersList[0].email})`);
    }
  } catch (error) {
    console.error("❌ Users Error:", error.message);
  }
}

await testUsers();
