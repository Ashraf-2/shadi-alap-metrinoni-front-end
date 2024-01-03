import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DetailsBioData from "../Pages/DetailsBioDate/DetailsBioData";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detailsBioData/:_id',
                element: <DetailsBioData></DetailsBioData>
            }
        ]
    }
])