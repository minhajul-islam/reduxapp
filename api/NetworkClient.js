import request from './AxiosConfig'
import qs from 'qs'
import {IS_LIVE} from "./Constants";
let baseURL = IS_LIVE ? 'https://' : 'https://';


const get = async (url, params = {}) => {
    let token = "token_token_token";
    if (token) {
        let config = {
            url,
            baseURL,
            method: 'get', // default
            headers: {'x-auth-token': token},
            params,
            timeout: 30000, // default is `0` (no timeout)
            withCredentials: false, // default
            responseEncoding: 'utf8', // default
            maxRedirects: 2, // default
        };
        return request(config);
    }
};

const post = async (url, body) => {
    let token = "token_token_token";
    if (token) {
        let config = {
            url,
            baseURL,
            method: 'post',
            headers: {
                'x-auth-token': token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(body),
            timeout: 30000,
            withCredentials: false,
            responseEncoding: 'utf8',
            maxRedirects: 2,
        };
        return request(config);
    }
};

const put = async (url, body) => {
    let token = "token_token_token";
    if (token) {
        let config = {
            url,
            baseURL,
            method: 'put',
            headers: {
                'x-auth-token': token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(body),
            timeout: 30000,
            withCredentials: false,
            responseEncoding: 'utf8',
            maxRedirects: 2,
        };
        return request(config);
    }
};

const patch = async (url, body) => {
    let token = "token_token_token";
    if (token) {
        let config = {
            url,
            baseURL,
            method: 'patch',
            headers: {
                'x-auth-token': token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(body),
            timeout: 30000,
            withCredentials: false,
            responseEncoding: 'utf8',
            maxRedirects: 2,
        };
        return request(config);
    }
};

const imagePost = async (url, body) => {
    let token = "token_token_token";
    if (token) {
        let config = {
            url,
            baseURL,
            method: 'post',
            headers: {
                'x-auth-token': token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: body,
            timeout: 30000,
            withCredentials: false,
            responseEncoding: 'utf8',
            maxRedirects: 2,
        };
        return request(config);
    }
};


const NetworkClient = {
    get, post, put, patch, imagePost
};

export default NetworkClient;
