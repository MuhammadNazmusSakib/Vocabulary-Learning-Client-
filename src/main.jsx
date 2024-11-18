import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Tutorials from './Component/Routes/Tutorials';
import StartLearning from './Component/Routes/StartLearning';
import AboutUs from './Component/Routes/AboutUs';
import LessonDetail from './Component/PrivateRoutes/LessonDetail';
import LessonsPage from './Component/Home/HomeComponents/Lessonspage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/start-learning",
        element: <LessonsPage/>
      },
      {
        path: "/tutorials",
        element: <Tutorials/>
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      // {
      //   path: "/lessons",
      //   element: <LessonsPage/>
      // },
      {
        path: "/lesson/:lesson_no",
        element: <LessonDetail/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
