import useFavourites from "../../../Hooks/useFavourites";

const FavouriteBiodata = () => {
    const [favourite, isLoadingFavourite] = useFavourites();
  
    console.log(favourite);
    console.log(favourite.forEach(item=> console.log(item._id, item.full_name)))
    if (isLoadingFavourite) {
        return <span className="loading loading-dots"></span>
    }
    return (
        <div className="mt-5">
            <h2>Favourite Biodata: {favourite.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
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
                        {/* row 1 */}
                        {
                            favourite.map(item => {
                                <tr>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image_url} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="font-bold">{item.full_name}</p>
                                    </td>
                                    <td>
                                        <p>{item._id}</p>
                                    </td>
                                    <td>
                                        <p>{item.occupation}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                        {/* <tr>

                           
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default FavouriteBiodata;