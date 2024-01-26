import axios from "axios";
import { useEffect, useState } from "react";

const TeamInformation = () => {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        // fetch('fakeLoveStory.json')
        fetch('fakeTeamMembers.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTeams(data)
                setIsloading(false)
            })
    }, [])
    console.log(teams);
    return (
        <div className="py-5">
            <h2 className="text-center text-4xl font-serif font-bold mb-5">Our Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    teams.map(item => <div key={item.id}>
                        <div className="flex flex-col items-center">
                            <div>
                                <img className="w-52 h-52 rounded-full border-4 border-b-black border-t-black p-2" src={item.image} alt="member image" />
                            </div>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TeamInformation;