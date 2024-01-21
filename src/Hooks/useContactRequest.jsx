import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useContactRequest = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:contactRequests = [], isLoading,refetch} = useQuery({
        queryKey: ['contactRequests'],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/contact-request/${user?.email}`)
            return res.data;
        }
    });

    return [contactRequests, isLoading,refetch];
};

export default useContactRequest;