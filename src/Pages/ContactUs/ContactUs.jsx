import ContactPageBanner from "./ContactPageBanner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const handleSubmit = (e)=> {
        e.preventDefault();
        // let form = e.target;
        // let first_name = form.first_name.value
        // let last_name = form.last_name.value;
        // let email = form.email.value;
        // let inquiry = form.inquiry.value;
        // console.log(first_name, last_name, email, inquiry);

        e.target.reset();
        toast.success("Your inquiry received successfully!")

    }
    return (
        <div>
            <ContactPageBanner></ContactPageBanner>
            <div className="flex flex-col md:flex-row mx-20">
                <div className="flex-1 flex flex-col items-center md:items-start justify-center  my-5 md:my-0">
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                    <p className="text-lg font-semibold text-blue-500">+8801337788224</p>
                    <p>Need to get in touch?Plase fill out the form for your inquiry..</p>
                </div>
                <div className="flex-1  ">
                    <form onSubmit={handleSubmit} className=" md:w-7/12 border card card-body shadow-lg px-2 mx-auto md:my-10 ">
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="first_name" className="input input-xs input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="last_name" className="input input-xs input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" className="input input-xs input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">What can we help you with?</span>
                            </label>
                            <textarea placeholder="inquiry" name="inquiry" className="textarea textarea-bordered textarea-md w-full max-w-xs" required ></textarea>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ContactUs;