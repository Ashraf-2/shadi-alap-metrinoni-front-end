import { useEffect, useState } from "react";
import { GiMale, GiFemale } from "react-icons/gi";
import { Link } from "react-router-dom";
import { calCulateAge } from "../../../Functions/calculateAgeFn";
import useBiodatas from "../../../Hooks/useBiodatas";



const UserCardHome = () => {
    const [userCard, setUserCard] = useState();
    const [isLoading, setLoading] = useState(true);

    const [biodatas, isLoadingBiodata] = useBiodatas();


    const sortByAge = (data) => {
        return data.sort((a, b) => calCulateAge(a.date_of_birth) - calCulateAge(b.date_of_birth))
    }


    useEffect(() => {
        fetch('fakeDataUser.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // setUserCard(sortByAge(data))
                const sortedUsers = sortByAge(data);
                setUserCard(sortedUsers);
                setLoading(false);
            })
    }, [])
    if (isLoading) {
        return <span className="loading loading-spinner "></span>
    }
    console.log(userCard);
    return (
        <div className="my-10">
            <h2 className="text-center text-4xl font-bold">Premium Members</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {
                    biodatas.map(onecard => <div key={onecard._id} className="card card-compact w-96 bg-base-100 shadow-xl hover:bg-slate-200  hover:scale-105 ease duration-100">
                        <figure><img className=" w-32 h-32 rounded-full mt-5" src={onecard.image_url} alt="Shoes" /></figure>
                        <div className=" card px-8 py-5">
                            <p className="text-xl font-semibold text-center flex flex-row justify-center ">
                                {onecard.full_name}
                                <span className="ml-2 mb-5">
                                    {
                                        onecard.gender === 'male' ? <GiMale /> : <GiFemale />
                                    }
                                </span>
                            </p>
                            <p><span className="font-semibold">ID</span>: {onecard._id}</p>
                            {/* <p>{onecard.about_me}</p> */}
                            <p><span className="font-semibold">Membership</span>: {onecard.membership}</p>
                            <p><span className="font-semibold">Occupation</span>: {onecard.occupation}</p>
                            <p><span className="font-semibold">Division</span>: {onecard.division_name}</p>

                            <p><span className="font-semibold">Age</span>: {calCulateAge(onecard.date_of_birth)}</p>

                            <div className="card-actions justify-end">
                                <Link to={`/detailsBioData/${onecard._id}`}>
                                    <button className="btn btn-ghost">View Profile</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )

                }
            </div>

        </div>
    );
};

export default UserCardHome;