import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-20">
            <h2 className="text-5xl font-bold">404 Error</h2>
            <Link to={'/'}>
                <button className="btn btn-error text-white my-10">Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;