import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useFavourites from "../../../Hooks/useFavourites";
import useAuth from "../../../Hooks/useAuth";
import DasboardTitle from "../../../Components/Shared/DasboardTitle";

const FavouriteBiodata = () => {
    const {user, isLoading} = useAuth();
    const [favourite, isLoadingFavourite, refetch] = useFavourites();
    const axiosSecure = useAxiosSecure();
    // console.log(favourite);
    // console.log(individualBiodatas);

    const handleDeleteFavourite = async (id) => {
        console.log('deletion id: ', id)
        const res = await axiosSecure.delete(`/favourite/${id}`)
        console.log(res.data);
        refetch();
    }
    if (isLoadingFavourite || isLoading) {
        return <div className=" flex items-center min-h-screen justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className="">
            <DasboardTitle title={"Favourite Biodatas"}></DasboardTitle>
            <h2 className="text-center mb-5 text-xl font-serif ">{favourite? `Favourites Person: ${favourite.length}`: "No Favourite person found"}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Biodata Id</th>
                            <th>Permanent Address</th>
                            <th>Occupation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            favourite.map(item =>
                                <tr key={item._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-16 object-cover">
                                                <img src={item.image_url_Favourite} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Link to={`/detailsBioData/${item.refId_Favourite}`}>
                                            <p className="font-bold btn-link btn text-black no-underline">{item.full_name_Favourite}</p>
                                        </Link>
                                    </td>
                                    <td>
                                        <p>{item.refId_Favourite}</p>
                                    </td>
                                    <td>
                                        <p>{item.division_Favourite}</p>
                                    </td>
                                    <td>
                                        <p>{item.occupation_Favourite}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteFavourite(item._id)} className="btn btn-outline">Delete</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default FavouriteBiodata;