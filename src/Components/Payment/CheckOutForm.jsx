import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('[error]',error);
        }else{
            console.log('[PaymentMethod]', paymentMethod);
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <CardElement className="px-3 py-5 bg-sky-200 rounded-lg"
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
                <button className="btn btn-outline text-black   bg-pink-500 mt-5" type="submit"  disabled={!stripe}>
                    Make Payment
                </button>
            </div>
        </form>
    );
};

export default CheckOutForm;