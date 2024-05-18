import axios from "axios";
import NProgress from "nprogress";
// import { store } from "../redux/store";

NProgress.configure({ trickleSpeed: 100, showSpinner: false });

const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        //
        NProgress.start();
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        NProgress.done();
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        NProgress.done();
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default instance;
