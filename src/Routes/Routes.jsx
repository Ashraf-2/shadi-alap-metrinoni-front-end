import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DetailsBioData from "../Pages/DetailsBioDate/DetailsBioData";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

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
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])