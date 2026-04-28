import ApiClient from "./utils/ApiClient.js";

class NginxProxyMenagerPlus {
  constructor(data) {
    this.api = new ApiClient(data);
  }

}

export default NginxProxyMenagerPlus;
