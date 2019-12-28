import request from './AxiosConfig';
import qs from 'qs';
import {IS_LIVE} from '../Constants';


let apiVersion = 'v1';
let baseApiURL = IS_LIVE ? 'http://api/' + apiVersion : 'http:///api/' + apiVersion;

const get = async (url, params = {}, token) => {
    let header1={
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    let header2={
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    };

        let config = {
            url,
            baseURL: baseApiURL,
            method: 'get', // default
            headers: (token===''||token==null)?header1:header2,
            params,
            timeout: 30000, // default is `0` (no timeout)// 30 sec
            withCredentials: false, // default
            responseEncoding: 'utf8', // default
            maxRedirects: 2, // default
        };
        return request(config);
};

const post = async (url, body, token) => {
    if (token) {
        let config = {
            url,
            baseURL: baseApiURL,
            method: 'post',
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
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
const postOauth = async ( body, token) => {
    if (token) {
        let config = {
            url:'/token',
            baseURL: 'http://15.188.44.25/oauth',
            method: 'post',
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
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

const put = async (url, body, token) => {
    if (token) {
        let config = {
            url,
            baseURL: baseApiURL,
            method: 'put',
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
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

const patch = async (url, body, token) => {
    if (token) {
        let config = {
            url,
            baseURL: baseApiURL,
            method: 'patch',
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
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

const imagePost = async (url, body, token) => {
    if (token) {
        let config = {
            url,
            baseURL: baseApiURL,
            method: 'post',
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
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
const postWithoutToken = async (url, body) => {
    let config = {
        url,
        baseURL: baseApiURL,
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(body),
        timeout: 30000,
        withCredentials: false,
        responseEncoding: 'utf8',
        maxRedirects: 2,
    };
    return request(config);
};


const NetworkClient = {
    get, post, put, patch, imagePost, postWithoutToken,postOauth
};
export default NetworkClient;

