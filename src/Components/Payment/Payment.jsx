import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

//toDo: add publish able key.
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const Payment = ({_id}) => {
    return (
        <div>
            <h2 className="text-xl text-center font-medium">Please make your payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm _id={_id}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;