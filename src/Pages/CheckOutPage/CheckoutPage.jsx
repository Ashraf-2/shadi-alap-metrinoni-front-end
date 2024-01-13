import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Payment from "../../Components/Payment/Payment";

const CheckoutPage = () => {
    const { _id } = useParams();

    const { user } = useAuth();
    // console.log(user);

    return (
        <div>
            <h2 className="text-center font-bold text-xl">Checkout Page: {_id}</h2>

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <div className="my-10">

                <div className="card-body max-w-xl mx-auto  bg-sky-200 rounded-md">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Request to Id</span>
                        </label>
                        <input defaultValue={_id} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Self Id</span>
                        </label>
                        <input defaultValue={"your_id"} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Self Email</span>
                        </label>
                        <input defaultValue={user?.email} readOnly className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-error text-white">Submit Request</button>
                    </div>

                    <div className=" bg-fuchsia-400">
                        <Payment></Payment>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CheckoutPage;