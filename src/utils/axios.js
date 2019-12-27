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
  //  设置拦截器
  interceptors (instance) {
    //  请求拦截器
    instance.interceptors.request.use(config => {
      return config;
    }, error => {
      return Promise.reject(error);
    });
    //  返回拦截器
    instance.interceptors.response.use(response => {
      const res = response.data;
      if (res.code !== '2000') {
        Message({
          message: res.msg || '获取数据失败，请刷新页面重试',
          type: 'error',
          duration: 5 * 1000
        });
        return Promise.reject(new Error(res.msg || 'Error'));
      } else {
        return res;
      }
    }, error => {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(error);
    });
  }
  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
}
export default Service;
