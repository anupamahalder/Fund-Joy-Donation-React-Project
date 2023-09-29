import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/Donation/DonationDetails";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('./Data.json'),
            },
            {
                path: '/donations',
                element: <Donation></Donation>,
                // loader: ()=>fetch('./Data.json'),
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                //creating dynamic path
                path: `/donation/:id`,
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('./Data.json'),
            }
        ]
    }
])

export default myCreatedRouter;