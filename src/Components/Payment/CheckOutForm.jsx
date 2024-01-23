import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useOwnInfo from "../../Hooks/useOwnInfo";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const CheckOutForm = ({ _id }) => {
    const stripe = useStripe();
    const elements = useElements();
    console.log('_id: ', _id);
    const [ownData] = useOwnInfo();
    const axiosSecure = useAxiosSecure();

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [requestedBiodataInfo, setRequestBiodataInfo] = useState(null);
    const [isLoading, setIstLoading] = useState(true); 
    useEffect(()=> {
        // const res = axiosSecure.get(`/biodata/${_id}`)
        axios.get(`http://localhost:5000/biodata/${_id}`)
        .then(res =>{
            console.log(res.data)
            setRequestBiodataInfo(res.data)
            setIstLoading(false);
        })
        .catch(error => console.log(error))

    },[])
    if(isLoading){
        return <div className=" flex items-center min-h-screen justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    const {full_name, image_url,mobile_number}  = requestedBiodataInfo || {};
    console.log('biodata request for : ', requestedBiodataInfo);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setErrorMessage(error);
        } else {
            setErrorMessage('');
            setSuccessMessage(`Your payment successfull and payment id: "${paymentMethod.id}"`)

            console.log('[PaymentMethod]', paymentMethod);
            const requestForContactInfo = {
                requestedForId: _id,
                requestedForPhoneNumber: mobile_number,
                requestedForPersonName: full_name,
                requestedForPersonImage: image_url,
                requesterPersonName: ownData?.name,
                requesterPersonId: ownData?._id,
                requesterPersonEmail: ownData?.email,
                requestSuccessStatus: 'pending',
                paid: 500,
            }
            console.log(requestForContactInfo);
            const res = await axiosSecure.post('/contact-request', requestForContactInfo);
            console.log(res.data);
            if(res.data?.insertedId){
                Swal.fire({
                    position: 'top-right',
                    timer: 1500,
                    showCloseButton: false,
                    text: 'Thank You for your payment',
                    title: "Payment Successfull!"
                })
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <CardElement className="px-3 py-5 bg-base-100 rounded-lg"
                options={{
                    style: {
                        base: {
                            padding: '5px',
                            fontSize: '18px',
                            color: 'black',
                            '::placeholder': {
                                color: 'black',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="text-center">

                {/* <button className="btn btn-secondary" type="submit" >
                    Pay
                </button> */}
                <button className="btn btn-outline text-black   bg-pink-500 mt-5" type="submit" disabled={!stripe}>
                    Make Payment
                </button>
            </div>
            <div>
                {
                    errorMessage && <p>{errorMessage}</p>
                }
            </div>
        </form>
    );
};

export default CheckOutForm;