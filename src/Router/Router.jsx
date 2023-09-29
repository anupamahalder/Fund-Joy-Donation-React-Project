import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import { Link } from "react-router-dom";
import DonationDetails from "../Pages/Donation/DonationDetails";
const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error
            <Link to = '/'>Home</Link>
        </div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('./Data.json'),
            },
            {
                path: '/donations',
                element: <Donation></Donation>,
                loader: ()=>fetch('./Data.json'),
            },
            {
                path: '/statistics',
                element: <div>Statistics</div>
            },
            {
                //creating dynamic path
                path: `/donations/:id`,
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('./Data.json'),
            }
        ]
    }
])

export default myCreatedRouter;