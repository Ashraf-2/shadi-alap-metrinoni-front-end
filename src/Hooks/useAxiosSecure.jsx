import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
    //
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('')
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }),function(error){
        //do something with request error
        return Promise.reject(error);
    }
    
    //intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response){
        return response;
    }, async function(error){
        const status_code_error = error.response?.status;
        console.log('status code error in the interceptor: ', status_code_error);
        //for 401 and 403 --> Make the user LOGGED OUT;
        if(status_code_error ===401 || status_code_error === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })
    
    
    return axiosSecure;
};

export default useAxiosSecure;