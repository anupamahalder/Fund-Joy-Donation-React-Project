import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
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
            },
            {
                path: '/donations',
                element: <div>Donations</div>
            }
        ]
    }
])

export default myCreatedRouter;