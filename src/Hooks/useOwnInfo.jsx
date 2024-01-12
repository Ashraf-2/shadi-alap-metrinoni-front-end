import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useOwnInfo = () => {

    const axiosPublic = useAxiosPublic();
    const {user, isLoading} = useAuth();
    // const email = user?.email;

    const {data: ownData=[], refetch, isLoading:isLoadingOwnInfo, isPending} = useQuery({
        queryKey: ['ownData'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            // console.log(res.data);
            return res.data;
        }
    })
    return [ownData, refetch, isLoadingOwnInfo, isPending];
};

export default useOwnInfo;