import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import axios from "axios";

const useBiodatas = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {data: biodatas=[], refetch, isLoading} = useQuery({
        queryKey: ['biodata'],
        queryFn: async()=> {
            const res = await axiosPublic.get('/biodata')
            // const res = await axios.get('/biodata')
            // console.log(res);
            return res.data;
        }
    })

    return [biodatas,refetch,isLoading];
};

export default useBiodatas;