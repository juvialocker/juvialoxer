import axios from 'axios';
import { API_URL, TOKEN_KEY } from '../config';
import { isTokenExpired } from '../helpers/utils';
import iView,{Modal} from 'iview';
import 'iview/dist/styles/iview.css';
import { Vue } from 'vue-property-decorator';
import router from 'vue-router';

Vue.use(iView);
Vue.use(router);

import store from '../store/store';

class ResError extends Error {
  public reason: string;
  public status: number;
  public url: string;
  constructor(reason: string, status: number, url: string) {
    super(status + ',' + reason + ', ' + url);
    this.reason = reason;
    this.status = status;
    this.url = url;
  }
}

export const getToken = () => {
  return new Promise((resolve, reject) => {
    let token = store.state.auth.token;
    try {
      if (!token && (window && window.localStorage.getItem(TOKEN_KEY))) {
        token = window.localStorage.getItem(TOKEN_KEY)!;
      }
    } catch (e) {
      token = 'token';
    }
    if (!token) { token = 'token'; }
    if (token && !isTokenExpired(token)) {
      return resolve(token);
    } else {
      reject(new Error('no token'));
    }
  });
};

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: API_URL,
  timeout: 20000,
  // method: 'post',
});

// request interceptor to pass auth token
// tslint:disable-next-line:no-any
axiosInstance.interceptors.request.use(async (config: any) => {
  try {
    const token = await getToken();
    if (config.url !== '/distribution/agencyUserLogin' && config.url !== '/api/public/sendMessage') {
      config.headers.acto = `${token}`;
    }
    return config;
  } catch (err) {
    return config;
  }
});

axiosInstance.interceptors.response.use((response) => {
  if (response.data && response.status !== 200) {
    const { status, error } = response.data;
    const url = response.config.url!.replace(response.config.baseURL!, '');
    const err = new ResError(error, status, url);
    return Promise.reject(err);
  }
  if (response.data.error && response.data.status === 500) {
    return response;
  }
  if (response.data.rtnCode === 401) {
    store.dispatch('rmToken');
    // TODO:退出登录
    location.href = '/login';
    // window.location.href = response.config.baseURL!;// 该方式只适用于前后端一起部署
  }
  return response;
// tslint:disable-next-line:only-arrow-functions
},function(error) {
  // 对响应错误做点什么
  if (error.response.status === 401) {
    // tslint:disable-next-line:no-any
    (Modal as any).warning({
      title: '警告',
      content: '<p>您的账号在其他地方登录或登录超时,请注意账号安全</p>',
      onOk: () => {
        location.href = '/';
      },
      // tslint:disable-next-line:no-empty
      onCancel: () => {
      },
    });
  } else if (error.response && error.response.status !== 401) {
    (Modal as any).warning({
      title: '警告',
      content: `<p>后台网络错误${error.response.status}，请稍后再试！</p>`,
      onOk: () => {
      },
      onCancel: () => {
      },
    });
  }else {
    (Modal as any).warning({
      title: '警告',
      content: `<p>后台网络错误，请稍后再试！</p>`,
      onOk: () => {
      },
      onCancel: () => {
      },
    });
  }
  return Promise.reject(error);
// tslint:disable-next-line:only-arrow-functions
});

export default axiosInstance;
