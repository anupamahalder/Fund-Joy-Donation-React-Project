import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('./Data.json'),
            },
            {
                path: '/donations',
                element: <div>Donations</div>
            },
            {
                path: '/statistics',
                element: <div>Statistics</div>
            },
            {
                //creating dynamic path
                path: '/donations/:id',
                element: <div>My donation</div>
            }
        ]
    }
])

export default myCreatedRouter;