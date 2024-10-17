import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home";
import CartPage from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Order from "../pages/Order";
import Dashboard from "../pages/Dashboard";
import UserDashboard from "../pages/UserDashboard";

import Login from "../components/Login"
import Register from "../components/Register";
import SingleBook from "../components/SingleBook";
import AdminLogin from "../components/AdminLogin";
import AddBook from "../components/AddBook";
import UpdateBook from "../components/UpdateBook";
import ManageBooks from "../components/ManageBooks";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

import DashboardLayout from "../components/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
            {
                path:'/checkout',
                element: <PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook />
            },
            {
                path: '/orders',
                element: <PrivateRoute><Order /></PrivateRoute>
            },
            {
                path: '/user-dashboard',
                element: <PrivateRoute><UserDashboard/></PrivateRoute>
            }
        ],
    },
    {
        path: "/admin",
        element: <AdminLogin />
    },
    {
        path: '/dashboard',
        element: <AdminRoute><DashboardLayout /></AdminRoute>,
        children: [
            {
                path: '',
                element: <AdminRoute><Dashboard /></AdminRoute>
            },
            {
                path: 'add-new-book',
                element: <AdminRoute><AddBook /></AdminRoute>
            },
            {
                path: 'edit-book/:id',
                element: <AdminRoute><UpdateBook /></AdminRoute>
            },
            {
                path: 'manage-books',
                element: <AdminRoute><ManageBooks /></AdminRoute>
            }
        ]
    }
])

export default router