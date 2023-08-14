// api/axiosClient.js
import axios from 'axios';
import { useRouter } from 'next/router';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    config.withCredentials = true
    return config;
})
axiosClient.interceptors.response.use(async (response) => {
    const config = response.config
    if ((config?.url?.indexOf('/login') ?? 0) >= 0 || (config?.url?.indexOf('/refresh-token') ?? 0) >= 0) {
        console.log(response.data.code);
        return response.data
    }

    const { code } = response.data
    if (code && code == 401) {
        const response = await axiosClient.post('/refresh-token')
        if (response.data.code && response.data.code == 401) {
            window.alert('Phiên đăng nhập đã hết hạn')
            const router = useRouter()
            router.push('/login')
        }
    }

    return response.data
}, (error) => {
    if (error.code === 'ERR_NETWORK') return alert('Không kết nối được tới internet');
    return Promise.reject(error);
});
export default axiosClient;

function parseError(data: any): any {
    throw new Error('Function not implemented.');
}
function isNetworkError(error: any) {
    throw new Error('Function not implemented.');
}

