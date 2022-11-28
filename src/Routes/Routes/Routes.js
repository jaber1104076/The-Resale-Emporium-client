import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllUser from "../../Pages/Dashboard/Alluser/AllUser";
import Dashboard from "../../Pages/Dashboard/DashBorad/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AllCatagory from "../../Pages/Home/AllCatagory/AllCatagory";
import Catagory from "../../Pages/Home/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRout/AdminRout";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allcatagory',
                element: <AllCatagory></AllCatagory>
            },
            {
                path: '/catagory/:name',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-jaber1104076.vercel.app/catagory/${params.name}`)

            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>,
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-jaber1104076.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])

export default router;