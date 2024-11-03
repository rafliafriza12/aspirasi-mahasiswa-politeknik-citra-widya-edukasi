import axios from 'axios'
// import { useHistory } from 'react-router-dom';

let API

API = axios.create({
    baseURL: process.env.REACT_APP_baseURL
})

API.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

API.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    })

export default API
