import axios from "axios";
import router from "@/router";
import store from "@/store";
import { Message } from "element-ui";
import { RedisStorage } from '@/services/sessionService'

axios.defaults.timeout = 15000;
axios.defaults.headers.post["Content-type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

axios.interceptors.request.use(
  config => {
    const token = RedisStorage.getter('token');
    token && (config.headers.token = token);
    store.dispatch("changeLoading", { type: "increase" });
    return config;
  },
  error => {
    Message.error(error);
  }
);

axios.interceptors.response.use(
  response => {
    store.dispatch("changeLoading", { type: "reduce" });
    return response;
  },
  (error: any) => {
    store.dispatch("changeLoading", { type: "reduce" });
    if (!!error.response.status) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: "/login"
          });
          break;
        default:
          Message.error(error.response.message);
      }
    }
  }
);

export function get(url: string, param?: any) {
  return axios.get(url, param);
}

export function post(url: string, param: any, config?: any) {
  return axios.post(url, param, config);
}
