# Nginx Proxy Manager Plus - API Client

[![npm version](https://img.shields.io/npm/v/@wleci/nginx-proxy-manager-api.svg)](https://www.npmjs.com/package/@wleci/nginx-proxy-manager-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Complete JavaScript/Node.js client library for [Nginx Proxy Manager Plus](https://github.com/ZoeyVid/NPMplus) API.

**✅ 68/68 endpoints implemented (100% coverage)**

## Features

- 🚀 **Complete API Coverage** - All 68 NPMplus API endpoints
- 🔐 **Automatic Authentication** - Cookie-based token management
- 🔄 **Singleton Pattern** - Single API client instance
- 🛡️ **Self-Signed SSL Support** - Works with self-signed certificates
- 📝 **Full JSDoc Documentation** - IntelliSense support in IDEs
- ✅ **Fully Tested** - Comprehensive test suite included

## Installation

```bash
npm install @wleci/nginx-proxy-manager-api
```

## Quick Start

```javascript
import ApiClient from "@wleci/nginx-proxy-manager-api/utils/ApiClient.js";
import proxyHosts from "@wleci/nginx-proxy-manager-api/api/proxy-hosts/proxy-hosts.js";

// Initialize API client
const api = new ApiClient({
  url: "https://your-npm-server.com",
  email: "admin@example.com",
  password: "your-password",
});

// Get all proxy hosts
const hosts = await proxyHosts(api);
console.log(hosts);
```

## API Reference

### Public Endpoints (3)

#### Health Status

```javascript
import healthStatus from "./api/public/health_status.js";
const status = await healthStatus(api);
```

#### API Schema

```javascript
import getSchema from "./api/public/schema.js";
const schema = await getSchema(api);
```

#### Version Check

```javascript
import getVersion from "./api/public/version.js";
const version = await getVersion(api);
```

---

### Authentication (3)

#### Create Token

```javascript
import tokensCreate from "./api/tokens/tokens_create.js";
const token = await tokensCreate(api, "admin@example.com", "password");
```

#### Refresh Token

```javascript
import tokensRefresh from "./api/tokens/tokens_refresh.js";
const token = await tokensRefresh(api);
```

#### Verify 2FA

```javascript
import tokens2fa from "./api/tokens/tokens_2fa.js";
const result = await tokens2fa(api, "challenge_token", "123456");
```

---

### Users (13)

#### Get All Users

```javascript
import users from "./api/users/users.js";
const usersList = await users(api);
```

#### Get User Details

```javascript
import usersDetail from "./api/users/users-detail.js";
const user = await usersDetail(api, 1); // or "me" for current user
```

#### Create User

```javascript
import usersCreate from "./api/users/users-create.js";
const user = await usersCreate(api, {
  name: "John Doe",
  nickname: "John",
  email: "john@example.com",
  roles: ["user"],
  is_disabled: false,
  auth: {
    type: "password",
    secret: "securepassword123",
  },
});
```

#### Update User

```javascript
import usersUpdate from "./api/users/users-update.js";
const user = await usersUpdate(api, 1, {
  name: "John Doe Updated",
});
```

#### Delete User

```javascript
import usersDelete from "./api/users/users-delete.js";
await usersDelete(api, 1);
```

#### Update User Password

```javascript
import usersAuth from "./api/users/users-auth.js";
await usersAuth(api, "me", {
  type: "password",
  current: "oldpassword",
  secret: "newpassword",
});
```

#### Update User Permissions

```javascript
import usersPermissions from "./api/users/users-permissions.js";
await usersPermissions(api, 1, {
  visibility: "all",
  proxy_hosts: "manage",
  certificates: "view",
});
```

#### 2FA Management

```javascript
import users2fa from "./api/users/users-2fa.js";
import users2faStatus from "./api/users/users-2fa-status.js";
import users2faEnable from "./api/users/users-2fa-enable.js";
import users2faDisable from "./api/users/users-2fa-disable.js";
import users2faBackupCodes from "./api/users/users-2fa-backup-codes.js";

// Start 2FA setup
const setup = await users2fa(api, 1);
console.log(setup.secret, setup.otpauth_url);

// Get 2FA status
const status = await users2faStatus(api, 1);

// Enable 2FA
const result = await users2faEnable(api, 1, "123456");
console.log(result.backup_codes);

// Regenerate backup codes
const codes = await users2faBackupCodes(api, 1, "123456");

// Disable 2FA
await users2faDisable(api, 1, "123456");
```

#### Login As User (Admin)

```javascript
import usersLogin from "./api/users/users-login.js";
const session = await usersLogin(api, 1);
```

---

### Proxy Hosts (7)

#### Get All Proxy Hosts

```javascript
import proxyHosts from "./api/proxy-hosts/proxy-hosts.js";
const hosts = await proxyHosts(api);
```

#### Create Proxy Host

```javascript
import proxyHostsCreate from "./api/proxy-hosts/proxy-hosts-create.js";
const host = await proxyHostsCreate(api, {
  domain_names: ["example.com", "www.example.com"],
  forward_scheme: "http",
  forward_host: "192.168.1.100",
  forward_port: 80,
  certificate_id: 1,
  ssl_forced: true,
  caching_enabled: false,
  block_exploits: true,
  allow_websocket_upgrade: true,
  http2_support: true,
  hsts_enabled: true,
  hsts_subdomains: false,
  access_list_id: 0,
  advanced_config: "",
});
```

#### Get Proxy Host Details

```javascript
import proxyHostsDetail from "./api/proxy-hosts/proxy-hosts-detail.js";
const host = await proxyHostsDetail(api, 1);
```

#### Update Proxy Host

```javascript
import proxyHostsUpdate from "./api/proxy-hosts/proxy-hosts-update.js";
const host = await proxyHostsUpdate(api, 1, {
  forward_port: 8080,
});
```

#### Enable/Disable Proxy Host

```javascript
import proxyHostsEnable from "./api/proxy-hosts/proxy-hosts-enable.js";
import proxyHostsDisable from "./api/proxy-hosts/proxy-hosts-disable.js";

await proxyHostsEnable(api, 1);
await proxyHostsDisable(api, 1);
```

#### Delete Proxy Host

```javascript
import proxyHostsDelete from "./api/proxy-hosts/proxy-hosts-delete.js";
await proxyHostsDelete(api, 1);
```

---

### Redirection Hosts (7)

#### Get All Redirection Hosts

```javascript
import redirectionHosts from "./api/redirection-hosts/redirection-hosts.js";
const hosts = await redirectionHosts(api);
```

#### Create Redirection Host

```javascript
import redirectionHostsCreate from "./api/redirection-hosts/redirection-hosts-create.js";
const host = await redirectionHostsCreate(api, {
  domain_names: ["old.example.com"],
  forward_http_code: 301,
  forward_scheme: "https",
  forward_domain_name: "new.example.com",
  preserve_path: true,
  certificate_id: 1,
  ssl_forced: true,
  block_exploits: false,
  http2_support: true,
  hsts_enabled: true,
  hsts_subdomains: false,
  advanced_config: "",
});
```

#### Get/Update/Delete/Enable/Disable

```javascript
import redirectionHostsDetail from "./api/redirection-hosts/redirection-hosts-detail.js";
import redirectionHostsUpdate from "./api/redirection-hosts/redirection-hosts-update.js";
import redirectionHostsDelete from "./api/redirection-hosts/redirection-hosts-delete.js";
import redirectionHostsEnable from "./api/redirection-hosts/redirection-hosts-enable.js";
import redirectionHostsDisable from "./api/redirection-hosts/redirection-hosts-disable.js";

const host = await redirectionHostsDetail(api, 1);
await redirectionHostsUpdate(api, 1, { forward_domain_name: "newer.com" });
await redirectionHostsEnable(api, 1);
await redirectionHostsDisable(api, 1);
await redirectionHostsDelete(api, 1);
```

---

### 404 Hosts (7)

#### Get All 404 Hosts

```javascript
import deadHosts from "./api/404-hosts/404-hosts.js";
const hosts = await deadHosts(api);
```

#### Create 404 Host

```javascript
import deadHostsCreate from "./api/404-hosts/404-hosts-create.js";
const host = await deadHostsCreate(api, {
  domain_names: ["dead.example.com"],
  certificate_id: 1,
  ssl_forced: true,
  hsts_enabled: true,
  hsts_subdomains: false,
  http2_support: true,
  advanced_config: "",
});
```

#### Get/Update/Delete/Enable/Disable

```javascript
import deadHostsDetail from "./api/404-hosts/404-hosts-detail.js";
import deadHostsUpdate from "./api/404-hosts/404-hosts-update.js";
import deadHostsDelete from "./api/404-hosts/404-hosts-delete.js";
import deadHostsEnable from "./api/404-hosts/404-hosts-enable.js";
import deadHostsDisable from "./api/404-hosts/404-hosts-disable.js";

const host = await deadHostsDetail(api, 1);
await deadHostsUpdate(api, 1, { domain_names: ["updated.com"] });
await deadHostsEnable(api, 1);
await deadHostsDisable(api, 1);
await deadHostsDelete(api, 1);
```

---

### Streams (7)

#### Get All Streams

```javascript
import streams from "./api/streams/streams.js";
const streamsList = await streams(api);
```

#### Create Stream

```javascript
import streamsCreate from "./api/streams/streams-create.js";
const stream = await streamsCreate(api, {
  incoming_port: 3306,
  forwarding_host: "192.168.1.100",
  forwarding_port: 3306,
  tcp_forwarding: true,
  udp_forwarding: false,
});
```

#### Get/Update/Delete/Enable/Disable

```javascript
import streamsDetail from "./api/streams/streams-detail.js";
import streamsUpdate from "./api/streams/streams-update.js";
import streamsDelete from "./api/streams/streams-delete.js";
import streamsEnable from "./api/streams/streams-enable.js";
import streamsDisable from "./api/streams/streams-disable.js";

const stream = await streamsDetail(api, 1);
await streamsUpdate(api, 1, { forwarding_port: 3307 });
await streamsEnable(api, 1);
await streamsDisable(api, 1);
await streamsDelete(api, 1);
```

---

### Certificates (10)

#### Get All Certificates

```javascript
import certificates from "./api/certificates/certificates.js";
const certs = await certificates(api);
```

#### Get DNS Providers

```javascript
import certificatesDnsProviders from "./api/certificates/certificates-dns-providers.js";
const providers = await certificatesDnsProviders(api);
```

#### Create Certificate

```javascript
import certificatesCreate from "./api/certificates/certificates-create.js";
const cert = await certificatesCreate(api, {
  provider: "letsencrypt",
  domain_names: ["example.com", "*.example.com"],
  meta: {
    dns_provider: "cloudflare",
    dns_provider_credentials: "your-api-token",
  },
});
```

#### Get Certificate Details

```javascript
import certificatesDetail from "./api/certificates/certificates-detail.js";
const cert = await certificatesDetail(api, 1);
```

#### Renew Certificate

```javascript
import certificatesRenew from "./api/certificates/certificates-renew.js";
await certificatesRenew(api, 1);
```

#### Download Certificate

```javascript
import certificatesDownload from "./api/certificates/certificates-download.js";
const files = await certificatesDownload(api, 1);
```

#### Upload Custom Certificate

```javascript
import certificatesUpload from "./api/certificates/certificates-upload.js";
await certificatesUpload(api, 1, {
  certificate: "-----BEGIN CERTIFICATE-----...",
  certificate_key: "-----BEGIN PRIVATE KEY-----...",
});
```

#### Validate Certificate

```javascript
import certificatesValidate from "./api/certificates/certificates-validate.js";
const result = await certificatesValidate(api, {
  certificate: "-----BEGIN CERTIFICATE-----...",
  certificate_key: "-----BEGIN PRIVATE KEY-----...",
});
```

#### Test HTTP Reachability

```javascript
import certificatesTestHttp from "./api/certificates/certificates-test-http.js";
const result = await certificatesTestHttp(api, {
  domain_names: ["example.com"],
});
```

#### Delete Certificate

```javascript
import certificatesDelete from "./api/certificates/certificates-delete.js";
await certificatesDelete(api, 1);
```

---

### Access Lists (5)

#### Get All Access Lists

```javascript
import accessLists from "./api/access-lists/access-lists.js";
const lists = await accessLists(api);
```

#### Create Access List

```javascript
import accessListsCreate from "./api/access-lists/access-lists-create.js";
const list = await accessListsCreate(api, {
  name: "My Access List",
  satisfy_any: true,
  pass_auth: true,
  items: [
    {
      username: "user1",
      password: "password123",
    },
    {
      directive: "allow",
      address: "192.168.1.0/24",
    },
  ],
});
```

#### Get/Update/Delete

```javascript
import accessListsDetail from "./api/access-lists/access-lists-detail.js";
import accessListsUpdate from "./api/access-lists/access-lists-update.js";
import accessListsDelete from "./api/access-lists/access-lists-delete.js";

const list = await accessListsDetail(api, 1);
await accessListsUpdate(api, 1, { name: "Updated Name" });
await accessListsDelete(api, 1);
```

---

### Audit Log (2)

#### Get All Audit Logs

```javascript
import auditLog from "./api/audit-log/audit-log.js";
const logs = await auditLog(api);
```

#### Get Audit Log Details

```javascript
import auditLogDetail from "./api/audit-log/audit-log-detail.js";
const log = await auditLogDetail(api, 1);
```

---

### Reports (1)

#### Get Host Statistics

```javascript
import reportsHosts from "./api/reports/reports-hosts.js";
const report = await reportsHosts(api);
```

---

### Settings (3)

#### Get All Settings

```javascript
import settings from "./api/settings/settings.js";
const settingsList = await settings(api);
```

#### Get Setting Details

```javascript
import settingsDetail from "./api/settings/settings-detail.js";
const setting = await settingsDetail(api, "default-site");
```

#### Update Setting

```javascript
import settingsUpdate from "./api/settings/settings-update.js";
await settingsUpdate(api, "default-site", {
  value: "example.com",
});
```

---

## Testing

Run basic tests:

```bash
npm test
```

Run full test suite (all 68 endpoints):

```bash
npm run test:full
```

## Project Structure

```
.
├── api/
│   ├── 404-hosts/          # 404 host endpoints (7)
│   ├── access-lists/       # Access list endpoints (5)
│   ├── audit-log/          # Audit log endpoints (2)
│   ├── certificates/       # Certificate endpoints (10)
│   ├── proxy-hosts/        # Proxy host endpoints (7)
│   ├── public/             # Public endpoints (3)
│   ├── redirection-hosts/  # Redirection host endpoints (7)
│   ├── reports/            # Report endpoints (1)
│   ├── settings/           # Settings endpoints (3)
│   ├── streams/            # Stream endpoints (7)
│   ├── tokens/             # Token endpoints (3)
│   └── users/              # User endpoints (13)
├── utils/
│   └── ApiClient.js        # Core API client
├── test/
│   ├── index.js            # Basic tests
│   └── full-test.js        # Full test suite
├── index.js                # Main entry point
└── package.json
```

## Requirements

- Node.js >= 16.0.0
- Nginx Proxy Manager Plus instance

## License

MIT © [wleci](https://wleci.pl)

## Author

**wleci**

- Website: [wleci.pl](https://wleci.pl)
- Email: contact@wleci.pl

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please use the [GitHub Issues](https://github.com/wleci/nginx-proxy-manager-api/issues).

## Related Projects

- [Nginx Proxy Manager Plus](https://github.com/ZoeyVid/NPMplus) - The NPMplus server
- [Nginx Proxy Manager](https://github.com/NginxProxyManager/nginx-proxy-manager) - Original NPM

---

Made with ❤️ by [wleci](https://wleci.pl)
