import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRevenueContact = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:revueCollections = [], isLoadingRevenue,refetch} = useQuery({
        queryKey: ['revenue'],
        queryFn: async()=> {
            const res = await axiosSecure.get('/contact-request/revunue')
            return res.data;
        }
    });

    return [revueCollections, isLoadingRevenue];
};

export default useRevenueContact;