import useBiodatas from '../../../Hooks/useBiodatas';
import useUsers from '../../../Hooks/useUsers';
import useRevenueContact from '../../../Hooks/useRevenueContact';
import DasboardTitle from '../../../Components/Shared/DasboardTitle';

const AdminDashboard = () => {
    const [biodatas,,,isLoadingBiodata] = useBiodatas();        //getting all biodatas to count the number of male and female biodatas.
    // console.log(typeof(biodatas));
    // console.log(biodatas);
    const [users, isLoadingUsers] = useUsers();         //get all users to find out the premium users
    // console.log('total users: ', users)
    const [revueCollections, isLoadingRevenue] = useRevenueContact();
    console.log(revueCollections);
   
    const premiumUsers = users.filter(item=> {
        const premium = item.membership === 'premium';
        return premium; //counting premium users.
    })

    const maleBiodata = biodatas.filter(item => {           //getting the male biodatas
       const male =  item.gender === 'male';
        return male
    })
    
    const femaleBiodata = biodatas.length - maleBiodata.length;    //getting the female biodatas 
    // console.log('biodatas later ', biodatas)
    // console.log('male biodata: ', maleBiodata);
    // console.log('female later ', femaleBiodata)
    // console.log('premium users: ', premiumUsers);
    // console.log({isLoadingBiodata, isLoadingUsers})
    if(isLoadingBiodata || isLoadingUsers || isLoadingRevenue){
        return <div className='flex justify-center min-h-screen items-center text-center'>
            <span className='loading loading-bars loading-lg'></span>
        </div>
    }

    return (
        <div>
            <DasboardTitle title={"Admin Dashboard"}></DasboardTitle>
            <div className='flex flex-col my-5 text-xl space-y-2 p-5 bg-orange-100'>
                <p>total biodata - {biodatas?.length}</p>
                <p>total male biodata - {maleBiodata?.length}</p>
                <p>total female biodata - {femaleBiodata}</p>
                <p>total premium biodata - {premiumUsers.length}</p>
                <p>total revenue - {500 * revueCollections.length} Tk</p>
            </div>
        </div>
    );
};

export default AdminDashboard;