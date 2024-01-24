import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://shadi-alap-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;