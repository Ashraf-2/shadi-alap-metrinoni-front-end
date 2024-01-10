import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useBiodatas from "../../Hooks/useBiodatas";
import axios from "axios";
import UserCardHome from "../Home/UserCard/UserCardHome";
import SingleBioData from "./singleBioData";

const BiodataPage = () => {
    const [biodatas, refetch, isLoading] = useBiodatas();
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectGender, setSelectGender] = useState('');

    const [divisionChange, setDivisionChange] = useState(false);

    if (isLoading) {
        return <span className="loading loading-spinner"></span>
    }
    console.log(biodatas);

    const handleSelect = (event) => {
        const value = event.target.value;
        console.log(value);
        setSelectedDivision(value)
        // setDivisionChange(true);
        // 
    }
    const handleSelectGender = (event) => {
        const gender = event.target.value;
        console.log(gender);
        setSelectGender(gender)
        // setDivisionChange(true);
        // refetch();
    }
    const filtered_data = biodatas.filter(item => {
        if (!selectedDivision) {
            return true;
        }
        // if(selectGender === 'male and female'){
        //     return item
        // }
        if (selectGender) {
            return item.division_name.toLowerCase() === selectedDivision && item.gender.toLowerCase() === selectGender
        }

        return item.division_name.toLowerCase() === selectedDivision;
    })
    console.log(filtered_data);
    console.log('filtered_data length: ', filtered_data.length)

    console.log('division status: ', divisionChange);
    refetch();

    return (
        <div>
            <h2>this is biodata page</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-10">
                {/* SELECT DIVISION */}
                <div className="col-span-2 bg-slate-300 ">
                    <div className=" my-2">
                        <select value={selectedDivision} onChange={handleSelect} className="select select-bordered w-full max-w-xs">
                            <option value='' disabled >Filter division</option>
                            <option value='dhaka'>Dhaka</option>
                            <option value="sylhet">Sylhet</option>
                            <option value='borishal'>Borishal</option>
                            <option value='rajshahi'>Rajshahi</option>
                            <option value='chattogram'>Chattogram</option>
                            <option value='maymanshingh'>Maymanshingh</option>
                        </select>
                    </div>
                    {/* SELECT GENDER */}

                    <div className="bg-slate-300">
                        <select value={selectGender} onChange={handleSelectGender} className="select select-bordered w-full max-w-xs">
                            <option disabled value='' >Filter Gender</option>
                            <option value='male'>Male</option>
                            <option value="female">Female</option>
                            <option value="male and female">Male and Female</option>
                        </select>
                    </div>
                </div>
                <div className=" col-span-10 bg-red-200 text-center text-xl p-5">
                    {
                        filtered_data.length ?
                            <div className="grid grid-cols-3 gap-5">
                                {
                                    // filtered_data.map((biodata, index) => <li key={biodata.id}>{index + 1}. {biodata.full_name}</li>)
                                    filtered_data.map((onecard, index) => <SingleBioData key={onecard.id} onecard={onecard}></SingleBioData>)
                                }
                            </div>
                            :
                            <p>noo data</p>

                    }

                </div>
            </div>

        </div>
    );
};

export default BiodataPage;