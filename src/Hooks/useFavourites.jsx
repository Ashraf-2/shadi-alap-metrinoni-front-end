import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useFavourites = () => {
    const {user, isLoading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:favourites=[], isLoading:isLoadingFavourite, refetch} = useQuery({
        queryKey: ['favourites'],
        enabled: !isLoading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/favourite/${user?.email}`)
            console.log(res.data);
            // const favouritesIds = res.data;


           
            // return [favourites, individualBiodatas];
            return res.data;
        }
    })

    return [favourites,isLoadingFavourite,refetch];
};

export default useFavourites;