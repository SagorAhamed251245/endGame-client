import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import CollegesDetails from "../pages/Home/CollegeCard/CollegesDetails/CollegesDetails";
import Register from "../pages/Singup/Register";
import Login from "../pages/Login/Login";
import FromFillUp from "../pages/Admission/FromFillUp/FromFillUp";
import Profile from "../pages/profile/Profile";
import UpdatedProfile from "../pages/profile/UpdatedProfile";
import ForgetPass from "../pages/ForgetPass/ForgetPass";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/college/:id",
        element: (
          <PrivateRoute>
            <CollegesDetails></CollegesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiUrl}/college/${params.id}`),
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission></Admission>
          </PrivateRoute>
        ),
      },
      {
        path: "/admission/fromfillup",
        element: (
          <PrivateRoute>
            <FromFillUp></FromFillUp>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCollege",
        element: (
          <PrivateRoute>
            <MyCollege></MyCollege>
          </PrivateRoute>
        ),
      },
      {
        path: "/college/:id",
        element: (
          <PrivateRoute>
            <CollegesDetails></CollegesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/editProfile",
        element: (
          <PrivateRoute>
            <UpdatedProfile></UpdatedProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/singup",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/resetPass",
    element: <ForgetPass></ForgetPass>,
  },
]);
