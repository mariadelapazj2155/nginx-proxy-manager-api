import ApiClient from "../utils/ApiClient.js";

// Public endpoints
import healthStatus from "../api/public/health_status.js";
import getSchema from "../api/public/schema.js";
import getVersion from "../api/public/version.js";

// Tokens
import tokensCreate from "../api/tokens/tokens_create.js";
import tokensRefresh from "../api/tokens/tokens_refresh.js";
import tokens2fa from "../api/tokens/tokens_2fa.js";

// Audit Log
import auditLog from "../api/audit-log/audit-log.js";
import auditLogDetail from "../api/audit-log/audit-log-detail.js";

// Users
import users from "../api/users/users.js";
import usersDetail from "../api/users/users-detail.js";
import usersCreate from "../api/users/users-create.js";
import usersUpdate from "../api/users/users-update.js";
import usersDelete from "../api/users/users-delete.js";
import users2fa from "../api/users/users-2fa.js";
import users2faStatus from "../api/users/users-2fa-status.js";
import users2faEnable from "../api/users/users-2fa-enable.js";
import users2faDisable from "../api/users/users-2fa-disable.js";
import users2faBackupCodes from "../api/users/users-2fa-backup-codes.js";
import usersAuth from "../api/users/users-auth.js";
import usersPermissions from "../api/users/users-permissions.js";
import usersLogin from "../api/users/users-login.js";

// Access Lists
import accessLists from "../api/access-lists/access-lists.js";
import accessListsDetail from "../api/access-lists/access-lists-detail.js";
import accessListsCreate from "../api/access-lists/access-lists-create.js";
import accessListsUpdate from "../api/access-lists/access-lists-update.js";
import accessListsDelete from "../api/access-lists/access-lists-delete.js";

// Certificates
import certificates from "../api/certificates/certificates.js";
import certificatesDetail from "../api/certificates/certificates-detail.js";
import certificatesCreate from "../api/certificates/certificates-create.js";
import certificatesDelete from "../api/certificates/certificates-delete.js";
import certificatesDnsProviders from "../api/certificates/certificates-dns-providers.js";
import certificatesValidate from "../api/certificates/certificates-validate.js";
import certificatesTestHttp from "../api/certificates/certificates-test-http.js";
import certificatesDownload from "../api/certificates/certificates-download.js";
import certificatesRenew from "../api/certificates/certificates-renew.js";
import certificatesUpload from "../api/certificates/certificates-upload.js";

// Proxy Hosts
import proxyHosts from "../api/proxy-hosts/proxy-hosts.js";
import proxyHostsDetail from "../api/proxy-hosts/proxy-hosts-detail.js";
import proxyHostsCreate from "../api/proxy-hosts/proxy-hosts-create.js";
import proxyHostsUpdate from "../api/proxy-hosts/proxy-hosts-update.js";
import proxyHostsDelete from "../api/proxy-hosts/proxy-hosts-delete.js";
import proxyHostsEnable from "../api/proxy-hosts/proxy-hosts-enable.js";
import proxyHostsDisable from "../api/proxy-hosts/proxy-hosts-disable.js";

// Redirection Hosts
import redirectionHosts from "../api/redirection-hosts/redirection-hosts.js";
import redirectionHostsDetail from "../api/redirection-hosts/redirection-hosts-detail.js";
import redirectionHostsCreate from "../api/redirection-hosts/redirection-hosts-create.js";
import redirectionHostsUpdate from "../api/redirection-hosts/redirection-hosts-update.js";
import redirectionHostsDelete from "../api/redirection-hosts/redirection-hosts-delete.js";
import redirectionHostsEnable from "../api/redirection-hosts/redirection-hosts-enable.js";
import redirectionHostsDisable from "../api/redirection-hosts/redirection-hosts-disable.js";

// 404 Hosts
import deadHosts from "../api/404-hosts/404-hosts.js";
import deadHostsDetail from "../api/404-hosts/404-hosts-detail.js";
import deadHostsCreate from "../api/404-hosts/404-hosts-create.js";
import deadHostsUpdate from "../api/404-hosts/404-hosts-update.js";
import deadHostsDelete from "../api/404-hosts/404-hosts-delete.js";
import deadHostsEnable from "../api/404-hosts/404-hosts-enable.js";
import deadHostsDisable from "../api/404-hosts/404-hosts-disable.js";

// Streams
import streams from "../api/streams/streams.js";
import streamsDetail from "../api/streams/streams-detail.js";
import streamsCreate from "../api/streams/streams-create.js";
import streamsUpdate from "../api/streams/streams-update.js";
import streamsDelete from "../api/streams/streams-delete.js";
import streamsEnable from "../api/streams/streams-enable.js";
import streamsDisable from "../api/streams/streams-disable.js";

// Reports & Settings
import reportsHosts from "../api/reports/reports-hosts.js";
import settings from "../api/settings/settings.js";
import settingsDetail from "../api/settings/settings-detail.js";
import settingsUpdate from "../api/settings/settings-update.js";

const config = {
  url: "https://your-npm-server.com:8181",
  email: "admin@example.com",
  password: "your-secure-password-here",
};

const api = new ApiClient(config);

// Test statistics
let passed = 0;
let failed = 0;
let skipped = 0;

// Helper function to run tests
async function test(name, fn, skip = false) {
  if (skip) {
    console.log(`⏭️  ${name} - SKIPPED`);
    skipped++;
    return;
  }

  try {
    await fn();
    console.log(`✅ ${name}`);
    passed++;
  } catch (error) {
    console.error(`❌ ${name} - ${error.message}`);
    failed++;
  }
}

console.log("🚀 Starting Full API Test Suite\n");
console.log("=".repeat(60));

// ============================================================================
// PUBLIC ENDPOINTS (3)
// ============================================================================
console.log("\n📋 PUBLIC ENDPOINTS");
console.log("-".repeat(60));

await test("GET / - Health Status", async () => {
  const status = await healthStatus(api);
  if (!status.status) throw new Error("No status field");
});

await test("GET /schema - API Schema", async () => {
  const schema = await getSchema(api);
  if (!schema.openapi) throw new Error("No openapi field");
});

await test("GET /version/check - Version Check", async () => {
  const version = await getVersion(api);
  if (!version.current) throw new Error("No current version");
});

// ============================================================================
// TOKENS (3)
// ============================================================================
console.log("\n🔑 TOKEN ENDPOINTS");
console.log("-".repeat(60));

await test("POST /tokens - Create Token", async () => {
  const result = await tokensCreate(api, config.email, config.password);
  if (!result.expires) throw new Error("No expires field");
});

await test("GET /tokens - Refresh Token", async () => {
  const result = await tokensRefresh(api);
  if (!result.expires) throw new Error("No expires field");
});

await test(
  "POST /tokens/2fa - Verify 2FA",
  async () => {
    // Skip - requires 2FA setup
  },
  true,
);

// ============================================================================
// AUDIT LOG (2)
// ============================================================================
console.log("\n📜 AUDIT LOG ENDPOINTS");
console.log("-".repeat(60));

let firstAuditLogId = null;

await test("GET /audit-log - Get All Audit Logs", async () => {
  const logs = await auditLog(api);
  if (!Array.isArray(logs)) throw new Error("Not an array");
  if (logs.length > 0) firstAuditLogId = logs[0].id;
});

await test("GET /audit-log/{id} - Get Audit Log Detail", async () => {
  if (!firstAuditLogId) throw new Error("No audit log ID available");
  const log = await auditLogDetail(api, firstAuditLogId);
  if (!log.id) throw new Error("No id field");
});

// ============================================================================
// USERS (13)
// ============================================================================
console.log("\n👥 USER ENDPOINTS");
console.log("-".repeat(60));

let testUserId = null;

await test("GET /users - Get All Users", async () => {
  const usersList = await users(api);
  if (!Array.isArray(usersList)) throw new Error("Not an array");
});

await test("GET /users/me - Get Current User", async () => {
  const user = await usersDetail(api, "me");
  if (!user.email) throw new Error("No email field");
});

await test("POST /users - Create User", async () => {
  const user = await usersCreate(api, {
    name: "Test User",
    nickname: "Test",
    email: `test-${Date.now()}@example.com`,
    roles: ["user"],
    is_disabled: false,
    auth: {
      type: "password",
      secret: "testpassword123",
    },
  });
  if (!user.id) throw new Error("No id field");
  testUserId = user.id;
});

await test("GET /users/{userID} - Get User Detail", async () => {
  if (!testUserId) throw new Error("No test user ID");
  const user = await usersDetail(api, testUserId);
  if (!user.id) throw new Error("No id field");
});

await test("PUT /users/{userID} - Update User", async () => {
  if (!testUserId) throw new Error("No test user ID");
  const user = await usersUpdate(api, testUserId, {
    name: "Test User Updated",
  });
  if (!user.id) throw new Error("No id field");
});

await test(
  "POST /users/{userID}/2fa - Start 2FA Setup",
  async () => {
    if (!testUserId) throw new Error("No test user ID");
    const result = await users2fa(api, testUserId);
    if (!result.secret) throw new Error("No secret field");
  },
  true,
); // Skip - may not be allowed for test user

await test(
  "GET /users/{userID}/2fa - Get 2FA Status",
  async () => {
    if (!testUserId) throw new Error("No test user ID");
    const status = await users2faStatus(api, testUserId);
    if (status.enabled === undefined) throw new Error("No enabled field");
  },
  true,
); // Skip - may not be allowed

await test(
  "POST /users/{userID}/2fa/enable - Enable 2FA",
  async () => {
    // Skip - requires 2FA setup
  },
  true,
);

await test(
  "DELETE /users/{userID}/2fa - Disable 2FA",
  async () => {
    // Skip - requires 2FA enabled
  },
  true,
);

await test(
  "POST /users/{userID}/2fa/backup-codes - Regenerate Backup Codes",
  async () => {
    // Skip - requires 2FA enabled
  },
  true,
);

await test("PUT /users/{userID}/permissions - Update Permissions", async () => {
  if (!testUserId) throw new Error("No test user ID");
  const result = await usersPermissions(api, testUserId, {
    visibility: "user",
    proxy_hosts: "view",
  });
  if (result !== true && !result.id) throw new Error("Update failed");
});

await test(
  "POST /users/{userID}/login - Login As User",
  async () => {
    if (!testUserId) throw new Error("No test user ID");
    const result = await usersLogin(api, testUserId);
    if (!result.expires) throw new Error("No expires field");
  },
  true,
); // Skip - may affect current session

await test("DELETE /users/{userID} - Delete User", async () => {
  if (!testUserId) throw new Error("No test user ID");
  await usersDelete(api, testUserId);
});

// ============================================================================
// ACCESS LISTS (5)
// ============================================================================
console.log("\n🔐 ACCESS LIST ENDPOINTS");
console.log("-".repeat(60));

let testAccessListId = null;

await test("GET /nginx/access-lists - Get All Access Lists", async () => {
  const lists = await accessLists(api);
  if (!Array.isArray(lists)) throw new Error("Not an array");
});

await test("POST /nginx/access-lists - Create Access List", async () => {
  const list = await accessListsCreate(api, {
    name: `Test Access List ${Date.now()}`,
    satisfy_any: true,
    pass_auth: true,
    items: [],
  });
  if (!list.id) throw new Error("No id field");
  testAccessListId = list.id;
});

await test("GET /nginx/access-lists/{listID} - Get Access List Detail", async () => {
  if (!testAccessListId) throw new Error("No test access list ID");
  const list = await accessListsDetail(api, testAccessListId);
  if (!list.id) throw new Error("No id field");
});

await test("PUT /nginx/access-lists/{listID} - Update Access List", async () => {
  if (!testAccessListId) throw new Error("No test access list ID");
  const list = await accessListsUpdate(api, testAccessListId, {
    name: "Test Access List Updated",
  });
  if (!list.id) throw new Error("No id field");
});

await test("DELETE /nginx/access-lists/{listID} - Delete Access List", async () => {
  if (!testAccessListId) throw new Error("No test access list ID");
  await accessListsDelete(api, testAccessListId);
});

// ============================================================================
// CERTIFICATES (10)
// ============================================================================
console.log("\n🔒 CERTIFICATE ENDPOINTS");
console.log("-".repeat(60));

await test("GET /nginx/certificates - Get All Certificates", async () => {
  const certs = await certificates(api);
  if (!Array.isArray(certs)) throw new Error("Not an array");
});

await test("GET /nginx/certificates/dns-providers - Get DNS Providers", async () => {
  const providers = await certificatesDnsProviders(api);
  if (!Array.isArray(providers)) throw new Error("Not an array");
});

await test(
  "POST /nginx/certificates/validate - Validate Certificate",
  async () => {
    // Skip - requires certificate files
  },
  true,
);

await test(
  "POST /nginx/certificates/test-http - Test HTTP",
  async () => {
    // Skip - requires domain
  },
  true,
);

await test(
  "POST /nginx/certificates - Create Certificate",
  async () => {
    // Skip - requires valid domain
  },
  true,
);

await test(
  "GET /nginx/certificates/{certID} - Get Certificate Detail",
  async () => {
    // Skip - no test certificate
  },
  true,
);

await test(
  "POST /nginx/certificates/{certID}/renew - Renew Certificate",
  async () => {
    // Skip - no test certificate
  },
  true,
);

await test(
  "GET /nginx/certificates/{certID}/download - Download Certificate",
  async () => {
    // Skip - no test certificate
  },
  true,
);

await test(
  "POST /nginx/certificates/{certID}/upload - Upload Certificate",
  async () => {
    // Skip - no test certificate
  },
  true,
);

await test(
  "DELETE /nginx/certificates/{certID} - Delete Certificate",
  async () => {
    // Skip - no test certificate
  },
  true,
);

// ============================================================================
// PROXY HOSTS (7)
// ============================================================================
console.log("\n🌐 PROXY HOST ENDPOINTS");
console.log("-".repeat(60));

let testProxyHostId = null;

await test("GET /nginx/proxy-hosts - Get All Proxy Hosts", async () => {
  const hosts = await proxyHosts(api);
  if (!Array.isArray(hosts)) throw new Error("Not an array");
});

await test("POST /nginx/proxy-hosts - Create Proxy Host", async () => {
  const host = await proxyHostsCreate(api, {
    domain_names: [`test-${Date.now()}.local`],
    forward_scheme: "http",
    forward_host: "192.168.1.100",
    forward_port: 80,
    certificate_id: 0,
    ssl_forced: false,
    caching_enabled: false,
    block_exploits: true,
    advanced_config: "",
    allow_websocket_upgrade: false,
    access_list_id: 0,
    http2_support: false,
    hsts_enabled: false,
    hsts_subdomains: false,
  });
  if (!host.id) throw new Error("No id field");
  testProxyHostId = host.id;
});

await test("GET /nginx/proxy-hosts/{hostID} - Get Proxy Host Detail", async () => {
  if (!testProxyHostId) throw new Error("No test proxy host ID");
  const host = await proxyHostsDetail(api, testProxyHostId);
  if (!host.id) throw new Error("No id field");
});

await test("PUT /nginx/proxy-hosts/{hostID} - Update Proxy Host", async () => {
  if (!testProxyHostId) throw new Error("No test proxy host ID");
  const host = await proxyHostsUpdate(api, testProxyHostId, {
    forward_port: 8080,
  });
  if (!host.id) throw new Error("No id field");
});

await test("POST /nginx/proxy-hosts/{hostID}/disable - Disable Proxy Host", async () => {
  if (!testProxyHostId) throw new Error("No test proxy host ID");
  await proxyHostsDisable(api, testProxyHostId);
});

await test("POST /nginx/proxy-hosts/{hostID}/enable - Enable Proxy Host", async () => {
  if (!testProxyHostId) throw new Error("No test proxy host ID");
  await proxyHostsEnable(api, testProxyHostId);
});

await test("DELETE /nginx/proxy-hosts/{hostID} - Delete Proxy Host", async () => {
  if (!testProxyHostId) throw new Error("No test proxy host ID");
  await proxyHostsDelete(api, testProxyHostId);
});

// ============================================================================
// REDIRECTION HOSTS (7)
// ============================================================================
console.log("\n↪️  REDIRECTION HOST ENDPOINTS");
console.log("-".repeat(60));

let testRedirectionHostId = null;

await test("GET /nginx/redirection-hosts - Get All Redirection Hosts", async () => {
  const hosts = await redirectionHosts(api);
  if (!Array.isArray(hosts)) throw new Error("Not an array");
});

await test("POST /nginx/redirection-hosts - Create Redirection Host", async () => {
  const host = await redirectionHostsCreate(api, {
    domain_names: [`redirect-${Date.now()}.local`],
    forward_http_code: 302,
    forward_scheme: "https",
    forward_domain_name: "example.com",
    preserve_path: true,
    certificate_id: 0,
    ssl_forced: false,
    block_exploits: false,
    advanced_config: "",
    http2_support: false,
    hsts_enabled: false,
    hsts_subdomains: false,
  });
  if (!host.id) throw new Error("No id field");
  testRedirectionHostId = host.id;
});

await test("GET /nginx/redirection-hosts/{hostID} - Get Redirection Host Detail", async () => {
  if (!testRedirectionHostId) throw new Error("No test redirection host ID");
  const host = await redirectionHostsDetail(api, testRedirectionHostId);
  if (!host.id) throw new Error("No id field");
});

await test("PUT /nginx/redirection-hosts/{hostID} - Update Redirection Host", async () => {
  if (!testRedirectionHostId) throw new Error("No test redirection host ID");
  const host = await redirectionHostsUpdate(api, testRedirectionHostId, {
    forward_domain_name: "updated.com",
  });
  if (!host.id) throw new Error("No id field");
});

await test("POST /nginx/redirection-hosts/{hostID}/disable - Disable Redirection Host", async () => {
  if (!testRedirectionHostId) throw new Error("No test redirection host ID");
  await redirectionHostsDisable(api, testRedirectionHostId);
});

await test("POST /nginx/redirection-hosts/{hostID}/enable - Enable Redirection Host", async () => {
  if (!testRedirectionHostId) throw new Error("No test redirection host ID");
  await redirectionHostsEnable(api, testRedirectionHostId);
});

await test("DELETE /nginx/redirection-hosts/{hostID} - Delete Redirection Host", async () => {
  if (!testRedirectionHostId) throw new Error("No test redirection host ID");
  await redirectionHostsDelete(api, testRedirectionHostId);
});

// ============================================================================
// 404 HOSTS (7)
// ============================================================================
console.log("\n🚫 404 HOST ENDPOINTS");
console.log("-".repeat(60));

let testDeadHostId = null;

await test("GET /nginx/dead-hosts - Get All 404 Hosts", async () => {
  const hosts = await deadHosts(api);
  if (!Array.isArray(hosts)) throw new Error("Not an array");
});

await test("POST /nginx/dead-hosts - Create 404 Host", async () => {
  const host = await deadHostsCreate(api, {
    domain_names: [`dead-${Date.now()}.local`],
    certificate_id: 0,
    ssl_forced: false,
    hsts_enabled: false,
    hsts_subdomains: false,
    http2_support: false,
    advanced_config: "",
  });
  if (!host.id) throw new Error("No id field");
  testDeadHostId = host.id;
});

await test("GET /nginx/dead-hosts/{hostID} - Get 404 Host Detail", async () => {
  if (!testDeadHostId) throw new Error("No test 404 host ID");
  const host = await deadHostsDetail(api, testDeadHostId);
  if (!host.id) throw new Error("No id field");
});

await test("PUT /nginx/dead-hosts/{hostID} - Update 404 Host", async () => {
  if (!testDeadHostId) throw new Error("No test 404 host ID");
  const host = await deadHostsUpdate(api, testDeadHostId, {
    domain_names: [`dead-updated-${Date.now()}.local`],
  });
  if (!host.id) throw new Error("No id field");
});

await test("POST /nginx/dead-hosts/{hostID}/disable - Disable 404 Host", async () => {
  if (!testDeadHostId) throw new Error("No test 404 host ID");
  await deadHostsDisable(api, testDeadHostId);
});

await test("POST /nginx/dead-hosts/{hostID}/enable - Enable 404 Host", async () => {
  if (!testDeadHostId) throw new Error("No test 404 host ID");
  await deadHostsEnable(api, testDeadHostId);
});

await test("DELETE /nginx/dead-hosts/{hostID} - Delete 404 Host", async () => {
  if (!testDeadHostId) throw new Error("No test 404 host ID");
  await deadHostsDelete(api, testDeadHostId);
});

// ============================================================================
// STREAMS (7)
// ============================================================================
console.log("\n🌊 STREAM ENDPOINTS");
console.log("-".repeat(60));

let testStreamId = null;

await test("GET /nginx/streams - Get All Streams", async () => {
  const streamsList = await streams(api);
  if (!Array.isArray(streamsList)) throw new Error("Not an array");
});

await test("POST /nginx/streams - Create Stream", async () => {
  const stream = await streamsCreate(api, {
    incoming_port: 10000 + Math.floor(Math.random() * 1000),
    forwarding_host: "192.168.1.100",
    forwarding_port: 3306,
    tcp_forwarding: true,
    udp_forwarding: false,
  });
  if (!stream.id) throw new Error("No id field");
  testStreamId = stream.id;
});

await test("GET /nginx/streams/{streamID} - Get Stream Detail", async () => {
  if (!testStreamId) throw new Error("No test stream ID");
  const stream = await streamsDetail(api, testStreamId);
  if (!stream.id) throw new Error("No id field");
});

await test("PUT /nginx/streams/{streamID} - Update Stream", async () => {
  if (!testStreamId) throw new Error("No test stream ID");
  const stream = await streamsUpdate(api, testStreamId, {
    forwarding_port: 3307,
  });
  if (!stream.id) throw new Error("No id field");
});

await test("POST /nginx/streams/{streamID}/disable - Disable Stream", async () => {
  if (!testStreamId) throw new Error("No test stream ID");
  await streamsDisable(api, testStreamId);
});

await test("POST /nginx/streams/{streamID}/enable - Enable Stream", async () => {
  if (!testStreamId) throw new Error("No test stream ID");
  await streamsEnable(api, testStreamId);
});

await test("DELETE /nginx/streams/{streamID} - Delete Stream", async () => {
  if (!testStreamId) throw new Error("No test stream ID");
  await streamsDelete(api, testStreamId);
});

// ============================================================================
// REPORTS & SETTINGS (4)
// ============================================================================
console.log("\n📊 REPORTS & SETTINGS ENDPOINTS");
console.log("-".repeat(60));

await test("GET /reports/hosts - Get Host Statistics", async () => {
  const report = await reportsHosts(api);
  if (!report) throw new Error("No report data");
});

await test("GET /settings - Get All Settings", async () => {
  const settingsList = await settings(api);
  if (!Array.isArray(settingsList)) throw new Error("Not an array");
});

await test(
  "GET /settings/{settingID} - Get Setting Detail",
  async () => {
    // Skip - need valid setting ID
  },
  true,
);

await test(
  "PUT /settings/{settingID} - Update Setting",
  async () => {
    // Skip - need valid setting ID
  },
  true,
);

// ============================================================================
// SUMMARY
// ============================================================================
console.log("\n" + "=".repeat(60));
console.log("📊 TEST SUMMARY");
console.log("=".repeat(60));
console.log(`✅ Passed:  ${passed}`);
console.log(`❌ Failed:  ${failed}`);
console.log(`⏭️  Skipped: ${skipped}`);
console.log(`📝 Total:   ${passed + failed + skipped}`);
console.log("=".repeat(60));

if (failed > 0) {
  console.log("\n⚠️  Some tests failed. Check the output above for details.");
  process.exit(1);
} else {
  console.log("\n🎉 All tests passed!");
  process.exit(0);
}
