
const ContactPageBanner = () => {

    const handleSubmit = ()=> {

    }
    return (
        <div className="min-h-[70vh] flex flex-col justify-center items-center" style={{ backgroundImage: 'url(https://blog.happyfox.com/wp-content/uploads/2020/10/Customer-Service-Vs-Customer-Support-Vs-Customer-Success.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <form className=" text-center  w-10/12 lg:w-5/12 mx-auto flex gap-1">
                    <input type="text" name="email" id="" placeholder="subscribe with email for our newslatter" className="w-full rounded-lg px-2" required/>
                    <button onClick={handleSubmit}  className="btn btn-error border-none text-white bg-[#FF6868]">Submit</button>
            </form>

        </div>
    );
};

export default ContactPageBanner;