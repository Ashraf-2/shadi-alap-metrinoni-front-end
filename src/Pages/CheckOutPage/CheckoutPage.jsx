/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useOwnBiodata from "../../Hooks/useOwnBiodata";
import CheckOutForm from "../../Components/Payment/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
    const { _id } = useParams();        //id of biodata whom you need.

    const { user } = useAuth();
    // console.log(user);
    const [ownBioData] = useOwnBiodata();
    // console.log('own biodata: ', ownBioData);

    return (
        <div>
            <h2 className="text-center font-bold text-xl">Checkout Page: {_id}</h2>

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <div className="my-10">

                <div className="card-body max-w-xl mx-auto  bg-sky-200 rounded-md">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Needy contact person's Id</span>
                        </label>
                        <input defaultValue={_id} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Self Biodata Id</span>
                        </label>
                        <input defaultValue={ownBioData._id} readOnly className="input input-bordered" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Self Email</span>
                            </label>
                            <input defaultValue={user?.email} readOnly className="input input-bordered" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Pay for contact information</span>
                            </label>
                            <input type="text" defaultValue={"500tk"} readOnly className="input input-bordered" />
                        </div>
                    </div>

                    <div className=" my-5">


                        <h2 className="text-xl text-center font-medium">Please make your payment</h2>
                        <Elements stripe={stripePromise}>
                            <CheckOutForm _id={_id}></CheckOutForm>
                        </Elements>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CheckoutPage;