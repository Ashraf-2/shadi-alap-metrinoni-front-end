import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSeccessStory = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {data: successStories=[], refetch, isLoading:isLoadingSuccessStories, isPending} = useQuery({
        queryKey: ['successStories'],
        queryFn: async()=> {
            const res = await axiosPublic.get('/successStory')
            // const res = await axios.get('/biodata')
            // console.log(res);
            return res.data;
        }
    })
    return [successStories, isLoadingSuccessStories]
};

export default useSeccessStory;