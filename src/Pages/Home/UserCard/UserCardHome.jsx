import { useEffect, useState } from "react";

const UserCardHome = () => {
    const [userCard, setUserCard] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('fakeDataUser.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserCard(data)
                setLoading(false);
            })
    }, [])
    if(isLoading){
        return <span className="loading loading-spinner "></span>
    }
    console.log(userCard);
    return (
        <div className=" my-10">
            <h2 className="text-center text-4xl font-bold">Premium Members</h2>
            <div className="grid grid-cols-3 gap-2">
                {
                    userCard.map(onecard => <div key={onecard._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className=" w-32 h-32 rounded-full mt-5" src={onecard.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-xl font-semibold text-center">{onecard.full_name}</h2>
                            <p>{onecard.about_me}</p>
                            <p>memberShip: {onecard.membership}</p>
                            <p>Occupation: {onecard.occupation}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-ghost">See Profile</button>
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