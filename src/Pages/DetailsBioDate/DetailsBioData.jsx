import { useParams } from "react-router-dom";

const DetailsBioData = () => {
    const {_id} = useParams()
    console.log(_id)
    return (
        <div>
            <h2>this is details bio data page for user id: {_id}</h2>
        </div>
    );
};

export default DetailsBioData;