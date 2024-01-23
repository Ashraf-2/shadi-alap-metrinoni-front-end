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
import Dashboard from "../Layout/DashBoard/Dashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ApprovePremium from "../Pages/Dashboard/ApprovePremium/ApprovePremium";
import EditBiodata from "../Pages/Dashboard/EditBiodata/EditBiodata";
import ViewBiodata from "../Pages/Dashboard/ViewBiodata/ViewBiodata";
import ContactRequest from "../Pages/Dashboard/ContactRequest/ContactRequest";
import FavouriteBiodata from "../Pages/Dashboard/FavouriteBiodata/FavouriteBiodata";
import ApproveContactReq from "../Pages/Dashboard/ApproveContactReq/ApproveContactReq";

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
                element: <PrivateRoutes><CheckoutPage></CheckoutPage></PrivateRoutes>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            //normal user paths
            {
                path: 'editBiodata',
                element: <EditBiodata></EditBiodata>
            },
            {
                path: "viewBiodata",
                element: <ViewBiodata></ViewBiodata>
            },
            {
                path: 'contactRequest',
                element: <ContactRequest></ContactRequest>
            },
            {
                path: 'favouriteBiodata',
                element: <FavouriteBiodata></FavouriteBiodata>
            }

            //admin user paths
            ,{
                path: 'adminDashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "manageUsers",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "approvePremium",
                element: <ApprovePremium></ApprovePremium>
            },
            {
                path: "approveContact",
                element: <ApproveContactReq></ApproveContactReq>
            }
        ]
    }
])