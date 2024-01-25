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
import GotMarried from "../Pages/Dashboard/GotMarried/GotMarried";
import AdminRoutes from "./AdminRoutes";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AdminSuccessStories from "../Pages/Dashboard/AdminSuccessStories/AdminSuccessStories";

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
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
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
            },
            {
                path: 'gotMarried',
                element: <GotMarried></GotMarried>
            }

            //admin user paths
            ,{
                path: 'adminDashboard',
                element: <AdminRoutes><AdminDashboard></AdminDashboard> </AdminRoutes>
            },
            {
                path: "manageUsers",
                element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
            },
            {
                path: "approvePremium",
                element: <AdminRoutes><ApprovePremium></ApprovePremium></AdminRoutes>
            },
            {
                path: "approveContact",
                element: <AdminRoutes><ApproveContactReq></ApproveContactReq></AdminRoutes>
            },
            {
                path: "successStories",
                element: <AdminRoutes><AdminSuccessStories></AdminSuccessStories></AdminRoutes>
            }
        ]
    }
])