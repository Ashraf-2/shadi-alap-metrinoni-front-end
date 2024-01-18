import React from 'react';
import useBiodatas from '../../../Hooks/useBiodatas';

const AdminDashboard = () => {
    const [biodatas,isLoadingBiodata] = useBiodatas();
    // console.log(typeof(biodatas));
    // console.log(biodatas);
    

    const maleBiodata = biodatas.filter(item => {           //getting the male biodatas
       const male =  item.gender === 'male';
        return male
    })
    
    const femaleBiodata = biodatas.length - maleBiodata.length;
    console.log('biodatas later ', biodatas)
    console.log('male biodata: ', maleBiodata);
    console.log('female later ', femaleBiodata)
   
    return (
        <div>
            <h2>Admin Dasboard</h2>
            <div className='flex flex-col my-5 text-xl space-y-2 p-5 bg-orange-100'>
                <p>total biodata - {biodatas?.length}</p>
                <p>total male biodata - {maleBiodata?.length}</p>
                <p>total female biodata - {femaleBiodata}</p>
                <p>total premium biodata</p>
                <p>total revenue</p>
            </div>
        </div>
    );
};

export default AdminDashboard;