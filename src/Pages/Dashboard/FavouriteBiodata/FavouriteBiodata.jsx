import useFavourites from "../../../Hooks/useFavourites";

const FavouriteBiodata = () => {
    const [favourite, isLoadingFavourite] = useFavourites();
  
    console.log(favourite);
    // console.log(individualBiodatas);
    
    if (isLoadingFavourite) {
        return <span className="loading loading-dots"></span>
    }
    return (
        <div className="mt-5">
            <h2>Favourite Biodata:{favourite.length} </h2>
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
                                        <p>{item.division_name}</p>
                                    </td>
                                    <td>
                                        <p>{item.occupation}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline">Delete</button>
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