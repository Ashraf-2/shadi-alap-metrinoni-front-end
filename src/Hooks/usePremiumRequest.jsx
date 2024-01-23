import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePremiumRequest = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:premiumRequests = [], isLoading,refetch} = useQuery({
        queryKey: ['premiumRequests'],
        queryFn: async()=> {
            const res = await axiosSecure.get('/user/premiumRequest')
            return res.data;
        }
    });

    return [premiumRequests, isLoading,refetch];
};

export default usePremiumRequest;