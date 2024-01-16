import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DetailsBioData from "../Pages/DetailsBioDate/DetailsBioData";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Biodatapage from "../Pages/BiodataPage/BiodataPage";
import CheckoutPage from "../Pages/CheckOutPage/CheckoutPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detailsBioData/:_id',
                element: <PrivateRoutes><DetailsBioData></DetailsBioData></PrivateRoutes>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/biodatapage',
                element: <Biodatapage></Biodatapage>
            },
            {
                path: '/checkout/:_id',
                element:<CheckoutPage></CheckoutPage>
            }
        ]
    }
])