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
import AboutUs from './Component/Routes/AboutUs';
import LessonDetail from './Component/PrivateRoutes/PrivateRouteComponents/LessonDetail';
import LessonsPage from './Component/Home/HomeComponents/Lessonspage';
import Login from './Component/Routes/SignIn&SignUp/Login';
import Register from './Component/Routes/SignIn&SignUp/Register';
import DataProvider from './Component/ContexApi/DataProvider';
import PrivateRoute from './Component/PrivateRoutes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Component/PrivateRoutes/PrivateRouteComponents/Dashboard';
import MyProfile from './Component/PrivateRoutes/PrivateRouteComponents/MyProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        path: "/lesson",
        element: <LessonsPage />
      },
      {
        path: "/lesson/:lesson_no",
        element: (
          <PrivateRoute>
            <LessonDetail />
          </PrivateRoute>
        )
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        )
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        )
      },
      {
        path: "/about-us",
        element: <AboutUs />
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
