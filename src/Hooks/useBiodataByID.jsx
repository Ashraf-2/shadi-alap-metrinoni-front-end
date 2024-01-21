import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBiodataByID = () => {
    const axiosSecure = useAxiosSecure();
    const {data: BiodataByID = [], isLoading: isLoadingBiodataByID, refetch} = useQuery({
        queryKey: ['biodataByID'],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/biodata/${}`)
        }
    })
    return []
};

export default useBiodataByID;