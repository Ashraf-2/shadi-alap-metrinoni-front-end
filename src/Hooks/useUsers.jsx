import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users=[], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res = await axiosSecure('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            // console.log(res.data);
            // console.log('token: ',localStorage.getItem('access-token'));
            return res.data;
        }
    })


    return [users, isLoading, refetch];
};

export default useUsers;