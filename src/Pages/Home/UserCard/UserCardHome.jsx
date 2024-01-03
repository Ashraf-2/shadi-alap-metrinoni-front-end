import { useEffect, useState } from "react";
import { GiMale, GiFemale } from "react-icons/gi";


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
    if (isLoading) {
        return <span className="loading loading-spinner "></span>
    }
    console.log(userCard);

    const calCulateAge = (dob) => {
        console.log(dob)
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        // const monthDiff = today.getMonth() - birthDate.getMonth();
        console.log('age: ',age); 
        return age;
    }
    return (
        <div className=" my-10">
            <h2 className="text-center text-4xl font-bold">Premium Members</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    userCard.map(onecard => <div key={onecard._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className=" w-32 h-32 rounded-full mt-5" src={onecard.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className="text-xl font-semibold text-center flex flex-row justify-center ">
                                {onecard.full_name}
                                <span className="ml-2">
                                    {
                                        onecard.gender === 'male' ? <GiMale /> : <GiFemale />
                                    }
                                </span>
                            </p>
                            <p><span className="font-semibold">ID</span>: {onecard._id}</p>
                            <p>{onecard.about_me}</p>
                            <p><span className="font-semibold">Membership</span>: {onecard.membership}</p>
                            <p><span className="font-semibold">Occupation</span>: {onecard.occupation}</p>
                            <p><span className="font-semibold">Division</span>: {onecard.division_name}</p>
                            <p><span className="font-semibold">Age</span>: {calCulateAge(onecard.date_of_birth)}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-ghost">View Profile</button>
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