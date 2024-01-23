/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useContactRequestUserSide = () => {
    const axiosSecure = useAxiosSecure();
    const {user, isLoading} = useAuth();
    const {data:ContactRequestsUser, isLoading:isLoadingContactRequest, refetch} = useQuery({
        queryKey : ['contactRequestUser'],
        queryFn : async()=> {
            const res = await axiosSecure.get(`/contact-request/${user?.email}`);
            return res.data;
        }
    });
    return [ContactRequestsUser, isLoadingContactRequest,refetch]
};

export default useContactRequestUserSide;