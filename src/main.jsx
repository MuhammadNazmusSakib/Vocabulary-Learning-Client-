import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Tutorials from './Component/PrivateRoutes/PrivateRouteComponents/Tutorials';
import LessonDetail from './Component/PrivateRoutes/PrivateRouteComponents/LessonDetail';
import LessonsPage from './Component/Home/HomeComponents/Lessonspage';
import Login from './Component/Routes/SignIn&SignUp/Login';
import Register from './Component/Routes/SignIn&SignUp/Register';
import DataProvider from './Component/ContexApi/DataProvider';
import PrivateRoute from './Component/PrivateRoutes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Component/PrivateRoutes/PrivateRouteComponents/Dashboard';
import MyProfile from './Component/PrivateRoutes/PrivateRouteComponents/MyProfile';
import UpdateProfile from './Component/PrivateRoutes/PrivateRouteComponents/UpdateProfile';
import ErrorPage from './Component/Routes/ErrorPage/ErrorPage';
import ForgotPassword from './Component/Routes/SignIn&SignUp/ForgotPassword';
import Profile from './Component/PrivateRoutes/PrivateRouteComponents/Profile/Profile';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/lesson",
        element: <LessonsPage />
      },
      {
        path: "/lesson/:difficulty",
        element: (
          <PrivateRoute>
            <LessonDetail />
          </PrivateRoute>
        )
      },
      {
        path: 'my-profile',
        element: (<PrivateRoute><Profile /></PrivateRoute>),
        children: [
          {
            path: "",
            element: <MyProfile />
          },
          {
            path: "update-profile",
            element: <UpdateProfile />
          },
          {
            path: "dashboard",
            element: <Dashboard />
          },
        ]
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        )
      },
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
