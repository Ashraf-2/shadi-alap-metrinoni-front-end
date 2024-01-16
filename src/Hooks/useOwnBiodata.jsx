import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOwnBiodata = () => {
    const axiosSecure = useAxiosSecure();
    const {user, isLoading:isAuthLoading} = useAuth();
    // const email = user?.email;

    const {data: ownBioData=[], refetch, isLoading:isLoadingOwnBiodataInfo, isPending} = useQuery({
        queryKey: ['ownData'],
        enabled: !isAuthLoading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/biodata/${user?.email}`)
            // console.log(res.data);
            return res.data;
        }
    })


    return [ownBioData,refetch,isLoadingOwnBiodataInfo];
};

export default useOwnBiodata;