import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useBiodatas from "../../Hooks/useBiodatas";
import axios from "axios";
import UserCardHome from "../Home/UserCard/UserCardHome";
import SingleBioData from "./singleBioData";

const BiodataPage = () => {
    const [biodatas,refetch, isLoadingBiodata] = useBiodatas();
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectGender, setSelectGender] = useState('');


    if (isLoadingBiodata) {
        return <div className="flex items-center justify-center">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
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
        if (!selectedDivision && !selectGender) {
            // all division and all gender base
            return true;
        }
        if (selectGender && selectedDivision === '') {
            // only based on gender and all division
            console.log('only gender base')
            return item.gender.toLowerCase() === selectGender;
        }
        if (selectGender === 'male and female') {
            // all male and female , not bound to any division
            console.log('male and female based')
            return item.division_name.toLowerCase() === selectedDivision;
        }

        if (selectGender) {
            // based on gender and division
            return item.division_name.toLowerCase() === selectedDivision && item.gender.toLowerCase() === selectGender;
        }
        //when no filter is working, when all data need to see.
        return item.division_name.toLowerCase() === selectedDivision;
    })
    console.log(filtered_data);
    console.log('filtered_data length: ', filtered_data.length)

    refetch();

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ">
                {/* SELECT DIVISION */}
                <div className="col-span-2 bg-slate-300 px-1 rounded-lg">
                    <div className=" my-2">
                        <select value={selectedDivision} onChange={handleSelect} className="select select-bordered w-full max-w-xs">
                            <option value='' disabled >Filter division</option>
                            <option value='dhaka'>Dhaka</option>
                            <option value="sylhet">Sylhet</option>
                            <option value='borishal'>Borishal</option>
                            <option value='rajshahi'>Rajshahi</option>
                            <option value='chattogram'>Chattogram</option>
                            <option value='maymanshingh'>Maymanshingh</option>
                            <option value=''>All divisino</option>
                        </select>
                    </div>
                    {/* SELECT GENDER */}

                    <div className="">
                        <select value={selectGender} onChange={handleSelectGender} className="select select-bordered w-full max-w-xs">
                            <option disabled value='' >Filter Gender</option>
                            <option value='male'>Male</option>
                            <option value="female">Female</option>
                            <option value="">Male and Female</option>
                        </select>
                    </div>
                </div>
                <div className=" col-span-10 text-center text-xl p-5 rounded-lg bg-red-100">
                    {
                        filtered_data.length ?
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {
                                    // filtered_data.map((biodata, index) => <li key={biodata.id}>{index + 1}. {biodata.full_name}</li>)
                                    filtered_data.map((onecard, index) => <SingleBioData key={onecard.id} onecard={onecard}></SingleBioData>)
                                }
                            </div>
                            :
                            <p className="text-center font-bold">Sorry! No Data Found.</p>

                    }

                </div>
            </div>

        </div>
    );
};

export default BiodataPage;