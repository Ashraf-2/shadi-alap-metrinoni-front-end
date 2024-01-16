import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, isLoading:isAuthLoading} = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const {data: isAdmin,isLoading:isAdminLoading,isPending,refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !isAuthLoading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
        

    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;