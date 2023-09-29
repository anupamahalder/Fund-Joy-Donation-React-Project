import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div>
                <h1>Sorry! You are in wrong route!</h1>
                <Link to='/'>
                    <button className="bg-red-600 rounded-lg m-10 p-2 text-white font-semibold">Go back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;