/* eslint-disable react/prop-types */
import { GiFemale, GiMale } from "react-icons/gi";
import { Link } from "react-router-dom";

const SingleBioData = ({onecard}) => {
    const {_id,image_url, gender, division_name,occupation,date_of_birth,full_name} = onecard;

    const calCulateAge = (dob) => {
        // console.log(dob)
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        // let ageMonth = today.getMonth() - birthDate.getMonth();
        // if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < birthDate.getDate())) {
        //     age--;
        // }
        // console.log('age: ', age);
        return age;
    }

    // const sortByAge = (data) => {
    //     return data.sort((a, b) => calCulateAge(a.date_of_birth) - calCulateAge(b.date_of_birth))
    // }





    return (
        <div key={_id} className="card card-compact bg-base-100 shadow-xl hover:bg-slate-200  hover:scale-105 ease duration-100">
        <figure><img className=" w-32 h-32 rounded-full mt-5" src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
            <p className="text-xl font-semibold text-center flex flex-row justify-center ">
                {full_name}
                <span className="ml-2">
                    {
                        gender === 'male' ? <GiMale /> : <GiFemale />
                    }
                </span>
            </p>
            <p><span className="font-semibold">Division</span>: {division_name}</p>
            <p><span className="font-semibold">Occupation</span>: {occupation}</p>
            <p><span className="font-semibold">Age</span>: {calCulateAge(date_of_birth)}</p>

            <div className="card-actions justify-end">
                <Link to={`/detailsBioData/${_id}`}>
                    <button className="btn btn-ghost">View Profile</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default SingleBioData;