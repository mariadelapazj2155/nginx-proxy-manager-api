import axios from "axios";
import https from "https";

class ApiClient {
  static instance = null;

  constructor(config) {
    // Singleton pattern
    if (ApiClient.instance) {
      return ApiClient.instance;
    }

    this.baseURL = config.url;
    this.email = config.email;
    this.password = config.password;
    this.token = null;

    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: httpsAgent,
    });

    ApiClient.instance = this;
  }

  static getInstance(config) {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient(config);
    }
    return ApiClient.instance;
  }

  static resetInstance() {
    ApiClient.instance = null;
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  async request(method, endpoint, data = null, requiresAuth = true) {
    const config = {
      method,
      url: endpoint,
      headers: {},
    };

    if (requiresAuth) {
      if (!this.token) {
        const response = await this.client.post("/api/tokens", {
          identity: this.email,
          secret: this.password,
        });
        // Token jest w ciasteczku set-cookie
        this.token = response.headers["set-cookie"]?.[0] || response.data.token;
      }
      // Wyślij token jako ciasteczko, nie jako Bearer
      config.headers["Cookie"] = this.token;
    }

    if (data) {
      config.data = data;
    }

    const response = await this.client.request(config);

    return response.data;
  }

  async get(endpoint, requiresAuth = true) {
    return this.request("GET", endpoint, null, requiresAuth);
  }

  async post(endpoint, data, requiresAuth = true) {
    // Dla endpointu /api/tokens zwróć pełną odpowiedź z tokenem
    if (endpoint === "/api/tokens" && !requiresAuth) {
      const config = {
        method: "POST",
        url: endpoint,
        data: data,
      };
      const response = await this.client.request(config);

      // Token jest w ciasteczku set-cookie
      const token = response.headers["set-cookie"]?.[0];

      if (token) {
        this.token = token;
        return { ...response.data, token };
      }
      return response.data;
    }

    return this.request("POST", endpoint, data, requiresAuth);
  }

  async put(endpoint, data, requiresAuth = true) {
    return this.request("PUT", endpoint, data, requiresAuth);
  }

  async delete(endpoint, requiresAuth = true) {
    return this.request("DELETE", endpoint, null, requiresAuth);
  }
}

export default ApiClient;
