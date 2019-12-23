import axios from 'axios';
import { Message } from 'element-ui';

class Service {
  constructor () {
    this.baseUrl = process.env.VUE_APP_BASE_API;
  }
  //  请求全局配置
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      timeout: 3000000,
      headers: {}
    };
    return config;
  }
  interceptors (instance) {
    instance.interceptors.request.use()
  }
}

export default Service;
