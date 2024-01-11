import { useParams } from "react-router-dom";

const CheckoutPage = () => {
    const {_id} = useParams();
    return (
        <div>
            <h2 className="text-center font-bold text-xl">Checkout Page: {_id}</h2>
        </div>
    );
};

export default CheckoutPage;