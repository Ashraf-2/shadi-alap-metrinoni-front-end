import { Link } from "react-router-dom";
import useOwnBiodata from "../../../Hooks/useOwnBiodata";

const ViewBiodata = () => {
    const [ownBioData] = useOwnBiodata();
    console.log(ownBioData);
    // if(isLoadingOwnBiodataInfo){
    //     return <span className="loading loading-dots"></span>
    // }
    return (
        <div>
            <h2>View Biodata</h2>
            {
                ownBioData === null? <p>your bio data ache</p>
                :
                <div>
                    <p>please make complete your biodata first</p>
                    <Link to={'/dashboard/editBiodata'}>
                        <button className="btn btn-link">Complete Biodata</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ViewBiodata;